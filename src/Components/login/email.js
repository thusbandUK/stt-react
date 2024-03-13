import React, { useState } from 'react';
import { resendVerificationEmail } from '../../api/loginCall';
import Form from "./form";
import { useOutletContext } from "react-router-dom";
import { updateErrorConsole, reset } from "./loginSlice";
import { useDispatch } from 'react-redux';


const Email = () => {

    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { email } = context;

    const dispatch = useDispatch();

    //handles API call to resend verification email
    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await resendVerificationEmail(email);
            dispatch(reset());
            if (response.error){
                //updates the redox store with error messages
                return dispatch(updateErrorConsole(response.error.messages));
            }     
            if (response.success){
                //updates redox store with success message
                return dispatch(updateErrorConsole([{path: "general", msg: 'Email sent!'}]));
            }
            //failsafe error message
            return dispatch(updateErrorConsole([{path: "general", msg: 'looks like something went wrong'}]));
    }

    return (
        <div>
            <p>You have been redirected here because you need to verify your email. This might be because the link
                we sent you did not arrive or because the link has expired. Please enter your email address below
                to send a fresh verification link.
            </p>
            <form onSubmit={handleSubmit}>
                <Form
                  loginProps={context}
                  renderEmail={true}                  
                />                
                <button type="submit">Click to send new verification link</button>
            </form>
        </div>
    )
}

export default Email;