import React, { useState, useEffect } from 'react';
import { flashcards } from './flashcardEngine';
import MultipleChoiceQuestion from './multipleChoiceQuestion';

const Presentation = () => {

    const [flashcard, setFlashcard] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [response, setResponse] = useState(null);
    const [submittedValue, setSubmittedValue] = useState(null);
    const [correctlyAnsweredQuestions, setCorrectlyAnsweredQuestions] = useState([]);
    const [count, setCount] = useState(1);
    const [recentQuestions, setRecentQuestions] = useState([]);
    const [startTime, setStartTime] = useState(null);
    const [finishTime, setFinishTime] = useState(null);

    /*
    
    yum!! Okay, so we wan't a first in first out queue(not sure that's a queue)

    it holds the last three questions (provided there are three previous questions)

    it doesn't queue the same number twice (although if it's working properly that shouldn't be a problem anyway)

    askQuestion checks if there are more remaining questions than there are questions in recentQuestions queue

    if there are it asks a different one

    if it has the same number or less it takes from the head of the queue, which should be the one that has been in there 
    longest

    push puts new element at the end of the array, shift removes from front

    separate function queueQuestion
    */

    function askQuestion(){
        let completeQuestionSet = Object.keys(flashcards);
        console.log(completeQuestionSet);
        let remainingQuestions = [];
        completeQuestionSet.forEach((x)=>{
            if (!correctlyAnsweredQuestions.includes(x)){
                return remainingQuestions.push(x);
            }
        })
        console.log(remainingQuestions);
        if (remainingQuestions.length === 0){
            const finishingTime = Date.now();
            const timeElapsed = (finishingTime - startTime)/1000;
            return setResponse(`Great job! 10 questions answered correctly in ${count} attempts and in ${timeElapsed} seconds. Woop!`);
        }
        if (remainingQuestions.length <= recentQuestions.length){
            let updatedRecentQuestions = recentQuestions;
            const selectedQuestion = updatedRecentQuestions.shift();
            setRecentQuestions(updatedRecentQuestions);
            setFlashcard(selectedQuestion);
            return setCurrentQuestion(flashcards[flashcard]);
        }
        let remainingNonRecentQuestions = remainingQuestions.filter((question)=> {
            return !recentQuestions.includes(question);
        })
        let randomNumber = Math.floor(Math.random() * remainingNonRecentQuestions.length);
        let selectedCard = remainingNonRecentQuestions[randomNumber];
        setFlashcard(selectedCard);
        //console.log(flashcards[flashcard].question);
        setCurrentQuestion(flashcards[flashcard]);
        return         
    }

    const handleClick = () => {
        const startingTime = Date.now();
        setStartTime(startingTime);
        return askQuestion();
    }

    const answerQuestion = () => {
        const correctAnswer = flashcards[flashcard].correctMCQ;
        if (submittedValue === correctAnswer){
            setResponse("You got it right. Woop!!");
            let updatedArray = correctlyAnsweredQuestions;
            updatedArray.push(flashcard);
            setCorrectlyAnsweredQuestions(updatedArray);
        } else {
            setResponse("Yikes, you got it wrong!");
            queueQuestion(flashcard);
        }
        setCount(count+1);
        
        setTimeout(() => {
            setResponse(null);            
            return askQuestion();
        }, [500]);
    }
    
    const onValueChange = (event) => {
        //console.log(event);
        return setSubmittedValue(event.target.value);
    }

    /*
    it seems like overkill but could add a function that ensures the same question is not queued twice?
    
    */
    const queueQuestion = (question) => {
        let updatedRecentQuestions = recentQuestions;
        if (recentQuestions.includes(question)){
            //let index = recentQuestions.findIndex(question);
            //updatedRecentQuestions.slice(index)
            updatedRecentQuestions = recentQuestions.filter((questionToCheck)=> {
                return questionToCheck !== question;
            })
            updatedRecentQuestions.push(question);
        }
        else if ((recentQuestions.length < 3)&&(!recentQuestions.includes(question))){
            updatedRecentQuestions.push(question);            
        } else if ((recentQuestions.length === 3)&&(!recentQuestions.includes(question))){
            updatedRecentQuestions.shift();
            updatedRecentQuestions.push(question);            
        }
        console.log(`Array of recent wrong answers: ${updatedRecentQuestions}`);
        return setRecentQuestions(updatedRecentQuestions);
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswer = flashcards[flashcard].correctMCQ;
        if (submittedValue === correctAnswer){
            setResponse("You got it right. Woop!!");
            let updatedArray = correctlyAnsweredQuestions;
            updatedArray.push(flashcard);
            setCorrectlyAnsweredQuestions(updatedArray);
        } else {
            setResponse("Yikes, you got it wrong!");
            queueQuestion(flashcard);
        }
        setCount(count+1);
        
        setTimeout(() => {
            setResponse(null);            
            return askQuestion();
        }, [500]);
    }

    return (
        <div>
            <p>Flashcards presentation page</p>
            <button onClick={handleClick}>Click for question</button>
            <p>Question: {flashcard}</p>
            
            { flashcard ? 
            <MultipleChoiceQuestion 
            question={flashcards[flashcard]}
            submitAnswer={handleSubmit}
            onValueChange={onValueChange}            
            />              
            : null
            }
            { response ? <p>{response}</p> : null}
        </div>
    )
}

export default Presentation;
