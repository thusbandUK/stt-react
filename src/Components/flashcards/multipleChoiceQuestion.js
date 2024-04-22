import React from 'react';

const MultipleChoiceQuestion = (props) => {

    const {name, multipleChoiceResponses, question} = props.question;


    return (
        <div>
            <form onSubmit={props.submitAnswer}>
                <fieldset>
                    <legend>{question}</legend>
                    
                   {Object.keys(multipleChoiceResponses).map((MCQ) => (
                     <div onClick={props.handleQuestionClick} id={MCQ}>
                        <p>{MCQ}</p>
                       <input onChange={props.onValueChange} type="radio" id={MCQ} name={name} value={MCQ} />
                       <label for={MCQ}>{multipleChoiceResponses[MCQ]}</label>
                    </div>
                    ))}

                      
                </fieldset>
                <button type="submit">Submit</button>
              </form>

        </div>
    )
}

export default MultipleChoiceQuestion;