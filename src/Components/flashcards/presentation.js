import React, { useState, useEffect } from 'react';
import { flashcards } from './flashcardEngine';
import MultipleChoiceQuestion from './multipleChoiceQuestion';
import WrittenFlashcard from './writtenFlashcard';
import { useSelector } from 'react-redux';
import Response from './response';

const Presentation = () => {

    //below two variables assign the number of the question...
    //for MCQ
    const [flashcard, setFlashcard] = useState(null);
    //for written response
    const [writtenFlashcard, setWrittenFlashcard] = useState(null);
    //this sets the feedback response given by the app to the user, once they have completed everything
    const [response, setResponse] = useState(false);
    //this stores the question numbers of correctly answered multiple choice questions
    const [correctlyAnsweredQuestions, setCorrectlyAnsweredQuestions] = useState([]);
    //this stores the question numbers of questions answered with a written response
    const [answeredWrittenQuestions, setAnsweredWrittenQuestions] = useState([]);
    //this counts the number of attempts required by the user to answer every multiple choice question correctly
    const [count, setCount] = useState(0);
    //this stores the three most recently attempted questions that the user got wrong (see queueQuestion function below)
    const [recentQuestions, setRecentQuestions] = useState([]);
    //this stores the time (in milliseconds) at which the user starts
    const [startTime, setStartTime] = useState(null);
    //this stores the question numbers of all the questions loaded up from the data source
    const [completeSet, setCompleteSet] = useState(Object.keys(flashcards))
    //OBSOLETE? intended to store the responses to the written response questions
    const [enteredValue, setEnteredValue] = useState(null);
    //this stores the stage for the written response. It is toggled between "response", when user enters response
    //and "feedback", when user checks off their correct answers
    const [writtenStage, setWrittenStage] = useState("response");
    //OBSOLETE? intended to store the user's written response, but now logged in Redux state
    const [writtenResponse, setWrittenResponse] = useState(null);
    
    const assessmentData = useSelector(state => state.flashcard);


    /*
    So, the summary should...
    1) report how long it took
    2) report how many attempts were needed for x MCQ
    3) report how many correct answers out of how many possible
    4) show what they got right and what they got wrong
    
    */

    /*This should go through the redox state and count the number of ticks */
    function harvestAssessmentData(feedbackObject){
        let questionNumbers = Object.keys(feedbackObject);
        let maximumMark = 0;
        let correctAnswers = 0;
        questionNumbers.forEach((x)=> {
            feedbackObject[x].checklist.forEach((y) => {
                maximumMark ++;
                if (y.checked === true){
                    correctAnswers ++;
                }                
            })            
        })
        return {correctAnswers: correctAnswers, maximumMark: maximumMark};
    }


    function askWrittenResponseQuestion(){
        
        let remainingWrittenQuestions = [];

        //filters the correctlyAnsweredQuestions state array and pushes any questions yet to be correctly answered to 
        //the remaining questions array
        completeSet.forEach((x)=>{
            if (!answeredWrittenQuestions.includes(x)){
                return remainingWrittenQuestions.push(x);
            }
        })        
        //if there are no remaining questions, the time to complete the set is computed and delivered as part of a success message
        /*
        [ADD CODE HERE ABOUT THE TOTAL MARKS FOR WRITTEN RESPONSE]
        */
        if (remainingWrittenQuestions.length === 0){
            const finishingTime = Date.now();
            const timeElapsed = (finishingTime - startTime)/1000;
            setWrittenFlashcard(null);
            const marksOutOf = harvestAssessmentData(assessmentData);
            return setResponse(`Great job! ${completeSet.length} multiple choice questions answered correctly in ${count} attempts and in ${timeElapsed} seconds and ${marksOutOf.correctAnswers} marks out of ${marksOutOf.maximumMark} in written response Woop!`);
        }
        //a random number is generated to select at random from one of the remainingNonRecent questions
        let randomNumber = Math.floor(Math.random() * remainingWrittenQuestions.length);
        let selectedCard = remainingWrittenQuestions[randomNumber];
        setWrittenFlashcard(selectedCard);        
        //setCurrentQuestion(flashcards[flashcard]);
        return  

    }

    /*
    Ask question initiates a set of questions, it will work through all of the questions in the stated array
    */

    function askQuestion(){
        //Creates an iterable array of the keys for the different flashcards in the object
        //correctly answered questions will be successively removed until the array is empty
        let completeQuestionSet = completeSet;
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
            //setResponse(`Great job! 10 questions answered correctly in ${count} attempts and in ${timeElapsed} seconds. Woop!`);
            setFlashcard(null);
            return askWrittenResponseQuestion();
        }
        //if the number of recently answered questions is greater than or equal to the number or remaining questions, the question
        //at the front of the recentQuestions queue is assigned
        if (remainingQuestions.length <= recentQuestions.length){
            let updatedRecentQuestions = recentQuestions;
            const selectedQuestion = updatedRecentQuestions.shift();
            setRecentQuestions(updatedRecentQuestions);
            setFlashcard(selectedQuestion);
            return //setCurrentQuestion(flashcards[flashcard]);
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
        //setCurrentQuestion(flashcards[flashcard]);
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

    const handleWrittenClick = () => {
        return askWrittenResponseQuestion();
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

    const handleEnteredValue = (event) => {
        //console.log(event.target.value);
        return setEnteredValue(event.target.value)
    }

    //this removes the question and input box and replaces it with the user's response and an assessment checklist to tick off
    const processResponse = (event) => {        
        return setWrittenStage("feedback");        
    }

    const handleSubmitChecklist = (event) => {        
        setWrittenStage("response");
        let updatedAnsweredQuestionsArray = answeredWrittenQuestions;
        updatedAnsweredQuestionsArray.push(writtenFlashcard);
        setAnsweredWrittenQuestions(updatedAnsweredQuestionsArray);
        
        return askWrittenResponseQuestion();
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
            <button onClick={handleWrittenClick}>Click for written response question</button>
            <p>Question: {flashcard}</p>
            
            { flashcard ? 
            <MultipleChoiceQuestion 
            question={flashcards[flashcard]}            
            handleQuestionClick={handleQuestionClick}
            />              
            : null
            }
            { response ? 
            <Response 
              assessmentData={assessmentData}
              summary={response}
            />  
            : null}

            { writtenFlashcard ? 
            <WrittenFlashcard
            question={flashcards[writtenFlashcard]}
            questionId={writtenFlashcard}
            submitResponse={processResponse}
            enterValue={handleEnteredValue}
            writtenStage={writtenStage}
            writtenResponse={writtenResponse}
            submitChecklist={handleSubmitChecklist}
            />
            : null            
        
            }
        </div>
    )
}

export default Presentation;