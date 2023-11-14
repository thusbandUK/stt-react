import React from 'react';
import Hero from './hero';
import Testimonial from './testimonial';
import Credentials from './credentials';
import Approach from './approach';
import Demo from './demo';
import Publications from './publications';
import Contact from './contact';


function Landing(props){



return (
    /*Hero text and image*/
    <div>
    
    <Hero />
    
    {/*Testimonial 1*/}

    <Testimonial 
    number="0"
    />

    {/*Credentials*/}

    <Credentials />

    {/*Testimonial 2*/}
    <Testimonial 
    number="1"
    />

    {/*Approach*/}

    <Approach />

    {/*Testimonial 3*/}
    <Testimonial 
    number="2"
    />

    {/*demo video*/}

    <Demo />

    {/*Publications*/}

    <Publications />

    {/*Testimonial 4*/}

    <Testimonial 
    number="3"
    />

    {/*Contact form*/}

    <Contact />


    </div>

    

  
    
)
}
export default Landing;