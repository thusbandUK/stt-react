import React, { useState, useEffect } from 'react';
import { checkMarkingPoint, logQuestion, enterResponse } from './writtenFlashcardSlice';
import { useSelector, useDispatch } from 'react-redux';

const WrittenFlashcard = (props) => {

  

    const dispatch = useDispatch();

    const response = useSelector(state => state.flashcard[props.questionId]);

    const {name, checklist, question} = props.question;
    
    //creates an object for the current question (it's configured to overwrite if it gets called twice)
    //into which the user's assessment data and the user's answer, will be written
    useEffect(() => {
      //maps checklist options and creates an array of objects, including the marking point criteria, which defaults to false
      let checklistArray = checklist.map((x) => {
        return {markingPoint: x, checked: false};
      })
      //dispatches checklistArray in object to Redux state, along with the question id, the question number and a space for the
      //user's response which defaults to null
      dispatch(logQuestion({questionId: props.questionId, question: question, response: "", checklist: checklistArray}));
    }, [props.questionId])

    //harvests answer written into the form field and dispatches it to the redux state
    const handleResponseChange = (event) => {      
      return dispatch(enterResponse({response: event.target.value, questionId: props.questionId}));
    }

    const handleCheckboxChange = (event) => {
      //harvests id which is a string that ends in a number, taken from the key which counts from 0 upwards and hence
      //replicates sequence of marking points in redux state checklist array
      const id = event.target.id;
      //harvests the string-format number from the id and converts it into a number
      const index = Number(id.charAt(id.length - 1));
      //detects whether the box is checked or unchecked, returns Boolean
      const checked = event.target.checked;
      //dispatches to reducer
      return dispatch(checkMarkingPoint({index: index, questionId: props.questionId, checked: checked}));
    }

    
    return (
        <div>
            <p>{question}</p> 
            
            { (props.writtenStage === "response") ?
                <form onSubmit={props.submitResponse}>
                  <div className="d-flex flex-column">
                    <label for="response">Write your answer:</label>

                    <textarea id="response" onChange={handleResponseChange} name="response" rows="5" cols="33">
                
                    </textarea>
                    <button type="submit">Submit</button>
                  </div>
                </form>
            : null}
            { (props.writtenStage === "feedback") ?
            
            <form  onSubmit={props.submitChecklist}>
              <fieldset>
                <legend>Check the points you got right</legend>
                <p>{response ? response.response : null}</p>
              
                {checklist.map((x) => {
                  let key = checklist.findIndex((item) => item === x);                  
                  return (
                    <div key={key}>
                      <input 
                        onChange={handleCheckboxChange}
                        type="checkbox" 
                        id={`checkbox-${key}`}                        
                        value={x} 
                        name={`checkbox-${key}`} />
                      <label for={`checkbox-${key}`}>{x}</label>
                    </div>      
                )})}
              
              </fieldset>
              <button type="submit">Submit</button>
            </form>               
              
            : null
            }
        </div>
    )

}

export default WrittenFlashcard;

/*

<fieldset>
                  <legend>Choose your monster's features:</legend>

                    <div>
                      <input type="checkbox" id="scales" name="scales" checked />
                      <label for="scales">Scales</label>
                    </div>

                    <div>
                      <input type="checkbox" id="horns" name="horns" />
                      <label for="horns">Horns</label>
                    </div>
                </fieldset>
*/