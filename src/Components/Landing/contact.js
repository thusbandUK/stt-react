import React from "react";

function Contact(props){

  

  return (
    /*Availability and contact form*/
<div className="section"  id="inquiries">
  <h2 className="fs-1">Inquire about lessons</h2>

  <div className="row featurette" id="booking-container">     
     <div>
      {/*Removed from dir below: data-netlify-recaptcha="true"  */}
      <form name="Contact-form1" method="POST">
      {/*Hidden input below is important to help netlify bots detect in build and the value needs to 
      match the name of the whole form*/}
      <input type="hidden" name="form-name" value="Contact-form1" />
        {/*Hidden section to identify source of traffic*/}
        <div className="form-group my-1">
          
            <input type="hidden" className="form-control" id="origin" placeholder="Origin code" name="origin"></input>
          
        </div>
        <div className="form-group my-1">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" id="name" placeholder="Name" name="name"></input>
        </div>
        <div className="form-group my-1">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group my-1">
          <label htmlFor="exam-board">Level and exam board</label>
          <select defaultValue="Click to select" className="form-select" id="exam-board" name="exam-board" >
            <option placeholder="Disabled input" disabled>Click to select</option>
            <option>A-level AQA</option>
            <option>A-level Edexcel</option>
            <option>A-level OCR A</option>
            <option>A-level OCR B</option>      
            <option>GCSE AQA</option>
            <option>GCSE Edexcel</option>
            <option>IGCSE Edexcel</option>
            <option>GCSE OCR Gateway</option>
            <option>GCSE OCR Twenty First Century</option>
            <option>Other (please specify below)</option>
          </select>
        </div>
        <div className="form-group my-1">
          <label htmlFor="inquiry">Your inquiry. Feel free to include time(s) you would like tutoring</label>
          <textarea className="form-control" id="inquiry" rows="3" name="inquiry"></textarea>
        </div>
        {/*<div className="w-100" data-netlify-recaptcha="true"></div>*/}
        <button type="submit" className="btn btn-lg btn-default">Submit</button>
      </form>
     </div>
  </div>
</div>

)
}

export default Contact;

/*
removed from select menu

<option selected placeholder="Disabled input" disabled>Click to select</option>

selected 
*/