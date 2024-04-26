import React from 'react';

const MultipleChoiceQuestion = (props) => {

    const {name, multipleChoiceResponses, question} = props.question;


    return (
        <div>
            <div>                
                    <h2>{question}</h2>
                    
                   {Object.keys(multipleChoiceResponses).map((MCQ) => (
                     <div onClick={props.handleQuestionClick} id={MCQ} style={{cursor:'pointer'}}>
                        <p>{MCQ}</p>                        
                        <p>{multipleChoiceResponses[MCQ]}</p>
                    </div>
                    ))}
                
            </div>

        </div>
    )
}

export default MultipleChoiceQuestion;