import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, updateAnswer, reset, identifierCodeToState } from "./y13HealthCheckSlice";
import { populateIdentifier, identifierObject } from "./y13-health-check-input-functions";
import Y13HealthCheckQuestions from "./y13HealthCheckQuestions";
import { NavLink } from "react-router-dom";

function Y13HealthCheckInput(props){


  //redux config
  const dispatch = useDispatch();
  useEffect(() => {
    //resets the state
    dispatch(reset());
    //removes any previous such data from localStorage middleware
    localStorage.removeItem("completeSavedState");
    //deploys the imported function which either generates a random code or harvests one from the params
    populateIdentifier();
    //updates state with identifier code, including boolean signifying whether or not it was from params,
    //ie from a personalised link
    dispatch(identifierCodeToState(identifierObject));
  }, [])
  const existingAnswers = useSelector(state => state.healthCheck.answers);


  //when radio button clicked, selected answer dispatched to state
  const onValueChange = (event) => {
    
    //dispatches the number of the updated question, the submitted answer and the id of the corresponding document element
     dispatch(selectAnswer({question: event.target.name, answerAndId: {answer: event.target.value, id: event.target.id}}));        
}

/*
onValueCheck is for questions 1, 5, 7 and 9 which have checkboxes instead of radios,
code adds answers to the state but removes them if they've already been selected
 */

const onValueCheck = (event) => {
  //harvests event object for the current question
  const currentQuestion = event.target.name;
  //searches state array to see if answer has already been input, returns index
 
 const answerIndex = existingAnswers[currentQuestion].findIndex((x) => {
  return x.answer === event.target.value
})

  //dispatches question, answer and index of existing answer
  dispatch(updateAnswer({question: event.target.name, answerAndId: {answer: event.target.value, id: event.target.id}, index: answerIndex}));
  
}



    return(
        <div class="section">
    
<div class="text-box" >
  <h1 class="text-center text-wrap w-75 m-auto mt-0 fs-1 mt-5">A-level chemistry health check for year 13 students
  </h1>
</div>
<div class="mt-5">
  <p>This page features a series of multiple choice questions which will test your understanding of key features of the year 12
  A-level chemistry course. After the form is submitted, you'll see which answers you got right or wrong, followed by a list of strengths
  and targets for improvement.</p>
  <p>Your answers will be saved anonymously, which helps to improve the website. </p>
</div>

<div class="row featurette">     
    <div>
      
      {/*As in sister ...Feedback.js file, the below will want uncommenting when the site is launched on Netlify */}
     <form id="form" name="y13-health-check" netlify method="POST" action="/resources/y13-health-check-feedback" data-netlify="true" data-netlify-recaptcha="true" content-Type="application/x-www-form-urlencoded">
     {/*This hidden input is to enable the netlify bots to match forms */}
     <input type="hidden" name="form-name" value="y13-health-check" />
     {/*<form id="form" name="y13-health-check" data-netlify="true" data-netlify-recaptcha="true" content-Type="application/x-www-form-urlencoded">*/}
      <div class="form-group my-1">
        
          <input type="hidden" class="form-control" id="identifier" placeholder="Identification code" name="identifier" />
        
      </div>
      
      <Y13HealthCheckQuestions 
      onValueChange={onValueChange}
      onValueCheck={onValueCheck}
      />

       
       <div class="w-100" data-netlify-recaptcha="true"></div>
       {/*As in sister ...Feedback.js file, the below will want uncommenting when the site is launched on Netlify */}
       <button type="submit" class="btn btn-lg btn-default" value="form-submit">Submit
       {/*<button type="submit" class="btn btn-lg btn-default" >*/}
        </button>
     </form>

     <output id="output"></output>
    </div>
 </div>



</div>

    )
}

export default Y13HealthCheckInput;

/*

I removed this from the submit logic because it shouldn't be necessary in the production build"


<NavLink
        to={'/resources/y13-health-check-feedback'}
        className="navlink-button"
        >
        Submit
        </NavLink>
*/