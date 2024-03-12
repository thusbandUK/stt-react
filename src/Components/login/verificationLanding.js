import React, { useEffect, useState } from 'react';
import { verifyEmail } from '../../api/loginCall';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";


const VerificationLanding = () => {

    /*
    so, you'll want to link things with the general apparatus. basically, they only need one message and it's  a 
    general message which says: link corrupted, please verify your email address (wait to be redirected) and
    redirects
    AT THE BACKEND it's a useful error to log because it can only really happen if someone tampers with the link
    so log whether the token and or the id is corrupted
    AT THE FRONTEND
    link corrupted, the end
    so use the "general" error category, which will want importing via context etc.
    
    */
    //const [verificationStatus, setVerificationStatus] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id") ? url.searchParams.get("id") : null;
    var token = url.searchParams.get("token") ? url.searchParams.get("token") : null;

    //general error message to be passed to redox store in various error outcomes
    const generalError = [{path: "general", msg: 'Something went wrong. You may need to reverify'}];
    
    //redirects user, takes string argument and redirects user accordingly, also resets redox store login object
    const redirect = (pathFragment) => {
        return setTimeout(() => {
            dispatch(reset());
            return navigate(`/login/${pathFragment}`);
        }, "5000")
    }

    useEffect(() => {
        //creates function which calls API route "verifyEmail" and handles response
        const sendEmail = async () => {
            if (!id || !token){
                //general error logic
                dispatch(updateErrorConsole(generalError));
                //redirects user to send a new verification link after 5 seconds
                return redirect("resend-email");
            }            
            const response = await verifyEmail(id, token);            
                if (response.success){
                    //updates redox store with general message
                    dispatch(updateErrorConsole([{path: "general", msg: 'Email verified. Please wait while you are redirected to login.'}]));
                    //sets browser to redirect to login page after 5 seconds
                    return redirect("signin");                    
                }
                if (response.error){
                    //update redox store with specific error messages
                    dispatch(updateErrorConsole(response.error.messages));
                    //sets browser to redirect to resend verification link after 5 seconds
                    return redirect("resend-email");
                }
                //general error logic
                dispatch(updateErrorConsole(generalError));
                //redirects user to send a new verification link after 5 seconds
                return redirect("resend-email");
            
        }
        //calls above sendEmail function
        sendEmail();
    }, [id, token]);


    return (
        <div>
            <p>Verification Landing Page</p>
            
        </div>
    )
}

export default VerificationLanding;