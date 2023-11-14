import React from "react";
import { testimonialsText } from './testimonialsData';

function Testimonial(props){


    const testimonialNumber = Number(props.number);
    
const testimonialText = testimonialsText[testimonialNumber];
//.testimonialNumber
//console.log(testimonialText[0]);

    return (
        <div class="testimonial">
          <div class="section testimonial-inner">
            <p class="py-5 fs-1">{testimonialText}</p>        
          </div>
        </div>
    )
}

export default Testimonial;