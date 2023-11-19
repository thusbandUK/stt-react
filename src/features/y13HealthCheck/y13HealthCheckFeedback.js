import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { disableChecksAndRadios,         
         recheckSelectedAnswers,
         checkAnswers,
         renderForm
        } from "./y13-health-check-submission";
import Y13HealthCheckQuestions from "./y13HealthCheckQuestions";

function Y13HealthCheckFeedback(props){


  //redux config
  const dispatch = useDispatch();
  const existingAnswers = useSelector(state => state.healthCheck.answers);
  const identifierObject = useSelector(state => state.healthCheck.code);

  /*This launches the various imported functions which render the page to reflect the choices
  made by the user, the corresponding feedback and, if the user has not been invited by a personalised
  link (ie is not already known to the webmaster), renders a contact form */
  useEffect(() => {   
    disableChecksAndRadios(existingAnswers);
    recheckSelectedAnswers(existingAnswers);
    checkAnswers(existingAnswers);
    renderForm(identifierObject);    
}, []);

/*Empty functions because bad code. Since the priority is to launch the react site with the functionality
of its static predecessor, this is somewhat of a shortcut patch to minimise the structural changes
necessary to render the same questions from the input page without the below event handlers*/


  //when radio button clicked, selected answer dispatched to state
const onValueChange = (event) => {
            
}
/*as above*/
const onValueCheck = (event) => {  
  
}



    return(
        <div class="section">
    
    <div class="text-box" >
  <h1 class="text-center text-wrap w-75 m-auto mt-0 fs-1 mt-5">A-level chemistry health check results
  </h1>
</div>
<div class="mt-5">
  <p>Your details have been anonymously saved, thank you. Scroll down to see your results. Answers highlighted yellow are correct, 
    red answers are incorrect.</p>
  
</div>

<div class="row featurette">     
    <div>
      
     {/*<form id="form" name="y13-health-check" method="POST" action="/resources/y13-health-check-submission.html" data-netlify="true" data-netlify-recaptcha="true" content-Type="application/x-www-form-urlencoded">*/}
     <form id="form" name="y13-health-check" data-netlify="true" data-netlify-recaptcha="true" content-Type="application/x-www-form-urlencoded">
      <div class="form-group my-1">
        
          <input type="hidden" class="form-control" id="identifier" placeholder="Identification code" name="identifier" />
        
      </div>
      
      <Y13HealthCheckQuestions />

{/*Below may need deleting or uncommenting once the site has been launched on netlify */}
{/*<div class="w-100" data-netlify-recaptcha="true"></div>
       <button type="submit" class="btn btn-lg btn-default" value="form-submit">Submit</button>
       <button type="submit" class="btn btn-lg btn-default" onClick={formSubmission}>Submit</button>*/}
     </form>

     {/*Feedback div renders feedback according to input */}

      <div id="feedback">
      <div id="strengths">
        <h3>You're doing really well with these skills:</h3>
        <ul>
          <li id="question-1-positive-feedback"></li>
          <li id="question-2-positive-feedback"></li>
          <li id="question-3-positive-feedback"></li>
          <li id="question-4-positive-feedback"></li>
          <li id="question-5-positive-feedback"></li>
          <li id="question-6-positive-feedback"></li>
          <li id="question-7-positive-feedback"></li>
          <li id="question-8-positive-feedback"></li>
          <li id="question-9-positive-feedback"></li>
          <li id="question-10-positive-feedback"></li>
          <li id="question-11-positive-feedback"></li>
        </ul>

      </div>
      <div id="weaknesses">
        <h3>You need more practice with these skills:</h3>
        <ul>
          <li id="question-1-negative-feedback"></li>
          <li id="question-2-negative-feedback"></li>
          <li id="question-3-negative-feedback"></li>
          <li id="question-4-negative-feedback"></li>
          <li id="question-5-negative-feedback"></li>
          <li id="question-6-negative-feedback"></li>
          <li id="question-7-negative-feedback"></li>
          <li id="question-8-negative-feedback"></li>
          <li id="question-9-negative-feedback"></li>
          <li id="question-10-negative-feedback"></li>
          <li id="question-11-negative-feedback"></li>
        </ul>

      </div>
     </div>
       
       

     {/*contact form*/}
      

      <div class="row featurette" id="health-check-contact-form-container"> 
        <h3>Get in touch</h3>
        <p>If you would like to discuss your feedback in more detail, please fill in the contact form below.</p>    
        <div>
         <form action="/thanks.html" name="Contact-form2" method="POST" data-netlify="true" data-netlify-recaptcha="true" content-Type="application/x-www-form-urlencoded">
           <input type="hidden" name="form-name" value="Contact-form2" />
           <div class="form-group my-1">
             <label for="name">Name</label>
             <input type="name" class="form-control" id="name" placeholder="Name" name="name" />
           </div>
           <div class="form-group my-1">            
            <input type="hidden" class="form-control" id="identifier" name="identifier" />
          </div>
           <div class="form-group my-1">
             <label for="email">Email address</label>
             <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
             <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
           </div>          
           
           <div class="form-group my-1">
             <label for="inquiry">You can include any extra information here if needed. Your answers are automatically included.</label>
             <textarea class="form-control" id="inquiry" rows="3" name="inquiry"></textarea>
           </div>
           <div class="w-100" data-netlify-recaptcha="true"></div>
           <button type="submit" class="btn btn-lg btn-default">Submit</button>
         </form>
        </div>
     </div>

     {/*Contact form ends*/}

     <output id="output"></output>
    </div>
 </div>



</div>

    )
}

export default Y13HealthCheckFeedback;

