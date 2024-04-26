import React, { useState } from 'react';

const WrittenFlashcard = (props) => {

    

    const {name, checklist, question} = props.question;
    //console.log(props);

    return (
        <div>
            <p>{question}</p> 
            
            { (props.writtenStage === "response") ?
                <form onSubmit={props.submitResponse}>
                  <div className="d-flex flex-column">
                    <label for="response">Write your answer:</label>

                    <textarea id="response" onChange={props.enterValue} name="response" rows="5" cols="33">
                
                    </textarea>
                    <button type="submit">Submit</button>
                  </div>
                </form>
            : null}
            { (props.writtenStage === "feedback") ?
            <fieldset>
              
                {checklist.map((x) => (
                    <div>
                      <input type="checkbox" id="scales" name="scales" />
                      <label for="scales">{x}</label>
                    </div>      
                ))}
              
            </fieldset>

                
              
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