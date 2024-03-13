import React from 'react';
import { enterNewPassword } from '../../api/loginCall';
import { useDispatch } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";
import { useNavigate } from 'react-router-dom';
import Form from "./form";
import { useOutletContext } from "react-router-dom";

const ResetLanding = () => {

    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { password, handleRedirect } = context;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id") ? url.searchParams.get("id") : null;
    var token = url.searchParams.get("token") ? url.searchParams.get("token") : null;

    //general error message to be passed to redox store in various error outcomes
    const generalError = [{path: "general", msg: 'Something went wrong. Please wait to be redirected to generate a new link.'}];
    
    //redirects user, takes string argument and redirects user accordingly, also resets redox store login object
    /*
    const redirect = (pathFragment) => {
        return setTimeout(() => {
            dispatch(reset());
            return navigate(`/login/${pathFragment}`);
        }, "5000")
    }*/

    const handleSubmit = async (event) => {
        event.preventDefault();
        //Checks for token and id
        if (!id || !token){
            //general error logic
            dispatch(updateErrorConsole(generalError));
            //redirects user to send a new verification link after 5 seconds
            return handleRedirect("resend-email");
        }
        const response = await enterNewPassword(id, token, password);
        
            if (response.success){
                //updates redox store with general message
                dispatch(updateErrorConsole([{path: "general", msg: 'Password updated. Please wait while you are redirected to login.'}]));
                //sets browser to redirect to login page after 5 seconds
                return handleRedirect("signin"); 
            }
            if (response.error){
                //update redox store with specific error messages
                dispatch(updateErrorConsole(response.error.messages));
                if (response.error.messages[0].path === "general"){
                    //sets browser to redirect to resend verification link after 5 seconds
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