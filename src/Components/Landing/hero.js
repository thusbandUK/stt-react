import React from "react";

function Hero(props){
    return(
        <div className="hero-text m-lg-5" id="hero">
          <div id="hero-text-row" className="row d-flex">
            <div className="col-lg-4 col-md-6">
              <img className="img-fluid" src="images/portrait-of-me.jpg"></img>
            </div>
            <div className="col-lg-7 col-md-5 mx-lg-3  mx-2 my-auto">
              <h1>Hi, I'm Tom</h1>
                <p>I tutor physics, biology and chemistry GCSE and chemistry A-level. I’ve had a passion for chemistry since I did my own A-levels. At university I realised how mind-blowing it is what atoms do 
                inside our bodies and my fate was set. I’ve been dedicated to lighting that same fire in others ever since. </p>
            </div>
          </div>
        </div>
    )
}

export default Hero;