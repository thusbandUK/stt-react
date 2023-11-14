/*the below is passed an object of the following form:

{
    code: CODE,
    params: BOOLEAN
}

the code, whether automatically generated or harvested from params is added to the hidden field
of a form, which is only rendered if params is false 
*/

export function renderForm(object){
//writes identifier code to hidden contact form field

document.getElementById("identifier").value = object.code;

//hides contact form if identification passed via personalised link (ie params)

if (object.params){          
  document.getElementById("health-check-contact-form-container").hidden = true;
}
}

//disables all the checks and radios so that users can't change the answers they originally submitted

export function disableChecksAndRadios(selectedAnswers){
    
Object.keys(selectedAnswers).forEach((x) => {
    console.log(x.slice(9));
[1,2,3,4,5,6].forEach((y) => {
    var element = document.getElementById(`Q${x.slice(9)}-option${y}`);
    if (!element){
        return;
    }
    return element.setAttribute("disabled", "true") ;
})
return;

})
}

/*Isolated function rechecks the checkbox / radio input of the element with the id passed as argument */

export function checkBox(id) {    
    if (!id){
        return;
    }

    var x = document.getElementById(id);
    
    x.setAttribute("checked", "true");
    
}
    
/*Passed an object comprising all the submitted answers from the state, calls the above
checkbox function to recheck all of the previous checked answers */

export function recheckSelectedAnswers(object){
    const checkBoxAnswers = [1,5,7,9];
    const radioAnswers = [2,3,4,6,8,10,11];

    radioAnswers.forEach((y) => {
        checkBox(object[`question-${y}`].id);
    })
    
    checkBoxAnswers.forEach((x)=> {
        object[`question-${x}`].forEach((z) => {
            checkBox(z.id);
        })

    })

}

//This is an object composed of the correct answers for comparision

export const correctAnswers = {
    1: ['Q1-option2', 'Q1-option3', 'Q1-option4'], //correct
    2: 'Q2-option4', //correct
    3: 'Q3-option4', //correct
    4: 'Q4-option2', //correct
    5: ['Q5-option2', 'Q5-option4'], //correct
    6: 'Q6-option1', //correct
    7: ['Q7-option3', 'Q7-option4'], //correct
    8: 'Q8-option4',  //correct
    9: ['Q9-option1', 'Q9-option2', 'Q9-option3', 'Q9-option5'], //correct
    10: 'Q10-option1',  //correct
    11: 'Q11-option3' //correct
    };
    
    
    
    //This function, used by the one below, puts a red box around incorrect answers and a yellow box around correct answers
    
    export function decoration(id, boolean){
    
       var element = document.getElementById(id);
    
    
    element.style.padding = "15px";
    if (boolean){
    element.style.border = "3px solid yellow";    
    } else {
    element.style.border = "3px solid red";    
    }    
    }
    
    //this object contains the feedback to assign for each question
    
    export const comments = {
    "question-1": "the meaning of ionic bonding and or understanding of the structure",
    "question-2": "how chemical equilibria respond to changes in temperature",
    "question-3": "how organic reaction mechanisms work",
    "question-4": "calculating enthalpy values using Hess cycles",
    "question-5": "identifying intermolecular forces and reasoning about how they affect boiling points",
    "question-6": "identifying oxidising agents and reducing agents",
    "question-7": "reasoning about covalent bonding and its role in the melting point of giant covalent substances",
    "question-8": "oxidation of alcohols and or understanding that more than one part of a molecule may react in the same reaction",
    "question-9": "identifying polar molecules and correctly justifying choices",
    "question-10": "titration calculations",
    "question-11": "naming organic compounds"
    }
    
    //This function organises feedback
    
    export function feedback(id, boolean){
        if(!id){
            return;
        }
    if (boolean){
    document.getElementById(`${id}-positive-feedback`).innerHTML = comments[id];    
    } else {
    document.getElementById(`${id}-negative-feedback`).innerHTML = comments[id];    
    }
    }
    
    //This function compiles correct and incorrect answers and then calls decoration and feedback functions
    
    export function compile(id, boolean){
    decoration(id, boolean);
    feedback(id, boolean);
    }
    
    //This function compares the selected answers to the correct answers and calls the above functions
    //accompanying each question-selection id with a boolean value

    export function checkAnswers(object){
        const checkBoxAnswers = [1,5,7,9];
        const radioAnswers = [2,3,4,6,8,10,11];
    
        radioAnswers.forEach((y) => {            

            if (correctAnswers[y] === object[`question-${y}`].id){                
                compile(`question-${y}`, true);
              } else {                
                compile(`question-${y}`, false);
              }
        })

        checkBoxAnswers.forEach((w) => {
           const correctChoices = object[`question-${w}`].filter((selection) => {            
            return correctAnswers[w].includes(selection.id);
           })           
           if ((correctAnswers[w].length === correctChoices.length) && (correctChoices.length === object[`question-${w}`].length)){
            compile(`question-${w}`, true);
           } else {                
            compile(`question-${w}`, false);
           }           
                      
        })
        
    }

    