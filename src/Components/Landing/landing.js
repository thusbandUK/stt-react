import React from 'react';
import Hero from './hero';
import Testimonial from './testimonial';
import Credentials from './credentials';
import Approach from './approach';
import Demo from './demo';
import Publications from './publications';
import Contact from './contact';
import { Helmet } from 'react-helmet-async';


function Landing(props){



return (
    /*Hero text and image*/
    <div>
    <Helmet>
                { /* Standard metadata tags */ }                
                  <title>Science Tutor Tom</title>
                  <meta name="description" content="Tom Husband is an online tutor of A-level chemistry and GCSE science." />                  
                { /* End standard metadata tags */ }
                { /* Facebook tags */ }
                <meta property="og:title" content="Tom Husband, science tutor" />
                <meta property="og:url" content="https://sciencetutortom.com" />
                <meta property="og:description" content="Tom Husband is an online tutor of A-level chemistry and GCSE science" />
                <meta property="og:image" content="https://sciencetutortom.com/images/Fb-intro-post-sep-2023.png" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_GB" />
                <meta property="fb:page_id" content="114457788407704" />
                  
                { /* End Facebook tags */ } 
                </Helmet>
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