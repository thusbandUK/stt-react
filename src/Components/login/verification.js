import React from 'react';
import { resendVerificationEmail } from '../../api/loginCall';
import { useSelector } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";
import { useDispatch } from 'react-redux';

/*
User is automatically directed to this element when their details have been accepted during sign up.
The signup process logs the user's email to the redux store, enabling the user to click the button
to resend a verification email, if necessary, rather than reentering their email.
*/

const Verification = () => {

    const dispatch = useDispatch();

    const email = useSelector(state => state.login.email);

    //handles API call to resendVerificationEmail
    const handleClick = async () => {
        const response = await resendVerificationEmail(email);
            if (response.success){
                //updates redox store with success message
                return dispatch(updateErrorConsole([{path: "general", msg: 'Email sent!'}]));
            }
            if (response.error){
                //updates the redox store with error messages
                return dispatch(updateErrorConsole(response.error.messages));
            }
            //failsafe error message
            return dispatch(updateErrorConsole([{path: "general", msg: 'looks like something went wrong'}]));        
    }

    return (
        <div>
            <p>An email has been sent to the email address with which you signed up. Please check your mails and click the 
                verification link that you find there. You may need to check the spam folder!

                If no email has been sent, please click the button below to send a fresh link.
            </p>
            <button onClick={handleClick}>Send another email</button>
        </div>
    )
}

export default Verification;