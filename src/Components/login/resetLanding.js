import React from 'react';
import { enterNewPassword } from '../../api/loginCall';
import { useDispatch } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";
import Form from "./form";
import { useOutletContext } from "react-router-dom";

/*
This is the page where users land after they have clicked the link sent to their email address after requesting a 
password reset. Params id and token are harvested from the incoming link and the user directed to enter their 
new password. If the hashed token matches the one stored in the server, their password is updated and the user
redirected to sign in
*/

const ResetLanding = () => {

    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { password, setPassword, handleRedirect } = context;
    
    const dispatch = useDispatch();

    //harvests params id and token from incoming url
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id") ? url.searchParams.get("id") : null;
    var token = url.searchParams.get("token") ? url.searchParams.get("token") : null;

    //general error message to be passed to redox store in various error outcomes
    const generalError = [{path: "general", msg: 'Something went wrong. Please wait to be redirected to generate a new link.'}];

    //handles api call
    const handleSubmit = async (event) => {
        event.preventDefault();
        //Checks for token and id
        if (!id || !token){
            //general error logic
            dispatch(updateErrorConsole(generalError));
            //redirects user to send a new reset password request after 5 seconds
            return handleRedirect("reset-password");
        }
        const response = await enterNewPassword(id, token, password);
        //resets password in parent element Login state to null
        dispatch(reset());
        setPassword("");        
            if (response.success){
                //updates redox store with general message
                dispatch(updateErrorConsole([{path: "general", msg: 'Password updated. Please wait while you are redirected to login.'}]));
                //sets browser to redirect to login page after 5 seconds
                return handleRedirect("signin"); 
            }
            if (response.error){
                //update redox store with specific error messages
                dispatch(updateErrorConsole(response.error.messages));
                /*
                If there is a problem with the selected new password, namely that it fails validation checks,
                the error path will be "password" and the below if route will be skipped. Hence users are
                only redirected to resend their request password reset link if their link is corrupted
                */
                if (response.error.messages[0].path === "general"){
                    //sets browser to redirect to resend request new password link after 5 seconds
                    return handleRedirect("reset-password");
                }
                return;                
            }
            //general error logic
            dispatch(updateErrorConsole(generalError));
            //redirects user to send a new verification link after 5 seconds
            return handleRedirect("reset-password");        
    }    

    return (
        <div>
            <h1>Enter new password</h1>            
                <div>
                    <form onSubmit={handleSubmit}>
                      <Form
                        loginProps={context}
                        renderPassword={true}
                      />                      
                      <button type="submit">Save new password</button>
                    </form>
                </div>            
        </div>
    )
}

export default ResetLanding;