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
    Ask question initiates a set of questions, it will work through all of the questions in the stated array
    */

    function askQuestion(){
        //Creates an iterable array of the keys for the different flashcards in the object
        //correctly answered questions will be successively removed until the array is empty
        let completeQuestionSet = Object.keys(flashcards);
        //creates an array of the questions yet to be answered correctly
        let remainingQuestions = [];
        //filters the correctlyAnsweredQuestions state array and pushes any questions yet to be correctly answered to 
        //the remaining questions array
        completeQuestionSet.forEach((x)=>{
            if (!correctlyAnsweredQuestions.includes(x)){
                return remainingQuestions.push(x);
            }
        })
        //if there are no remaining questions, the time to complete the set is computed and delivered as part of a success message
        if (remainingQuestions.length === 0){
            const finishingTime = Date.now();
            const timeElapsed = (finishingTime - startTime)/1000;
            return setResponse(`Great job! 10 questions answered correctly in ${count} attempts and in ${timeElapsed} seconds. Woop!`);
        }
        //if the number of recently answered questions is greater than or equal to the number or remaining questions, the question
        //at the front of the recentQuestions queue is assigned
        if (remainingQuestions.length <= recentQuestions.length){
            let updatedRecentQuestions = recentQuestions;
            const selectedQuestion = updatedRecentQuestions.shift();
            setRecentQuestions(updatedRecentQuestions);
            setFlashcard(selectedQuestion);
            return setCurrentQuestion(flashcards[flashcard]);
        }
        //if more questions remain than are stored in the recently answered queue, the remaining questions are filtered to remove
        //any of those in the recently answered array, to ensure that the same question is only answered twice in a row if it is the
        //last remaining question
        let remainingNonRecentQuestions = remainingQuestions.filter((question)=> {
            return !recentQuestions.includes(question);
        })
        //a random number is generated to select at random from one of the remainingNonRecent questions
        let randomNumber = Math.floor(Math.random() * remainingNonRecentQuestions.length);
        let selectedCard = remainingNonRecentQuestions[randomNumber];
        setFlashcard(selectedCard);        
        setCurrentQuestion(flashcards[flashcard]);
        return         
    }

    /*
    This is the starting button, which starts the timer and triggers askQuestion()
    */

    const handleClick = () => {
        const startingTime = Date.now();
        setStartTime(startingTime);
        return askQuestion();
    }

    /*
    Answer question function
    */

    const answerQuestion = (suggestedAnswer) => {
        //obtains the correct answer from the flashcards data object
        const correctAnswer = flashcards[flashcard].correctMCQ;
        //if the selected answer is the correct answer, that question is pushed into the correctly answered questions array in state
        //if the selected answer is wrong, that question is placed into the queue in state for recently answered wrong questions
        
        if (suggestedAnswer === correctAnswer){
            setResponse("You got it right. Woop!!");
            let updatedArray = correctlyAnsweredQuestions;
            updatedArray.push(flashcard);
            setCorrectlyAnsweredQuestions(updatedArray);
        } else {
            setResponse("Yikes, you got it wrong!");
            queueQuestion(flashcard);
        }
        //increments count of question attempts
        setCount(count+1);
        //sets a timer so user has time to read success message before next question
        setTimeout(() => {
            setResponse(null);            
            return askQuestion();
        }, [500]);
    }
   
    /*
    Queue question logs the three most recent incorrect answers so that the same question is only ever asked twice in a row once
    the user has only that one remaining question left
    */
    const queueQuestion = (question) => {
        //copies array of recent questions
        let updatedRecentQuestions = recentQuestions;
        //if recent questions includes the question being queued, it is removed and reinserted at the back of the queue
        if (recentQuestions.includes(question)){
            updatedRecentQuestions = recentQuestions.filter((questionToCheck)=> {
            return questionToCheck !== question;
            })
            updatedRecentQuestions.push(question);
        }
        //if there are fewer than three questions in the queue and the current question is not among them, the current question
        //is added to the back of the queue
        else if ((recentQuestions.length < 3)&&(!recentQuestions.includes(question))){
            updatedRecentQuestions.push(question);            
        } 
        //if there are already three questions in the queue and the current question is not among them, the current question
        //is added to the back of the queue and the question at the front of the queue is removed
        else if ((recentQuestions.length === 3)&&(!recentQuestions.includes(question))){
            updatedRecentQuestions.shift();
            updatedRecentQuestions.push(question);            
        }
        //the updated queue of recent questions is passed to state
        return setRecentQuestions(updatedRecentQuestions);
    }

    //event listener passes div id for clicked question to the answerQuestion function
    const handleQuestionClick = (event) => {
        return answerQuestion(event.currentTarget.id);
    }    

    return (
        <div>
            <p>Flashcards presentation page</p>
            <button onClick={handleClick}>Click for question</button>
            <p>Question: {flashcard}</p>
            
            { flashcard ? 
            <MultipleChoiceQuestion 
            question={flashcards[flashcard]}
            
            handleQuestionClick={handleQuestionClick}
            />              
            : null
            }
            { response ? <p>{response}</p> : null}
        </div>
    )
}

export default Presentation;