import React from "react";

function Approach(props){
    
    return(
    /*Approach*/
    <div id="approach" className="section">     
      <h2 className="fs-1">What are my lessons like?</h2> 
      <div className="row d-flex justify-content-center">
        <div className="col-xl-5  portrait">
          <img className="img-fluid my-auto" alt="french fries with salt" src="images/cropped french fries w salt.png"></img>
        </div>
        <div className="col-xl-5  landscape">
          <img className="img-fluid my-auto" alt="french fries with salt" src="images/cropped french fries w salt landscape.png"></img>
        </div>
        <div className="col-xl-7  d-flex flex-column justify-content-between">
          
          <p>
            It’s mostly me asking you what you like on your chips. Well, not quite, but when we begin a topic, I'll always look for a way
            to make it relatable. And you might not like chips, in which case I’ll find out whatever food you like with 
            salt and then we’ll talk about what holds the particles together in salt (ionic bonding). Then down the line I’ll ask you if 
            there’s anything else you like on chips and if you don’t like vinegar we’ll find something you do like which contains vinegar. 
            (Did you know there’s vinegar in ketchup?) Then we can talk about acids being proton donors, weak acids partially 
            dissociating, carboxylic acids being produced by the oxidation of ethanol and so on. Once you feel clearer about the theory,
            we'll look at some exam questions and then find another thing to learn. Over time this will  boost your confidence and raise 
            your grade. 
          </p>
        </div>        
      </div>
    </div>
)
}

export default Approach;