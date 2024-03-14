import React from "react";
import { useDispatch } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";
import { loginRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';
import Form from "./form";
import { useOutletContext } from "react-router-dom";

/*
This is the element where users sign in to an existing account
*/

function Signin(){

    const dispatch = useDispatch();    
    const navigate = useNavigate();
    
    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { email, setEmail, password, setPassword } = context;

    //navigates user to request password reset page
    const handleNavigatePasswordReset = () => {        
        return navigate('/login/reset-password');
    }
   
    //handles login request
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //calls login request POST api function
        const response = await loginRequest(email, password);

        //resets any error messages in the redux store
        dispatch(reset());

        //resets password in parent element Login state to null with each call to the server
        setPassword("");
        
            if (response.success){
                //resets email in parent element Login state to null on successful sign in only
                setEmail("");
                //redirects user to welcome user page
                return navigate('/login/welcome-user');              
            }
            if (response.error){
                //updates error values in redux state object
                return dispatch(updateErrorConsole(response.error.messages));
            }            
            //Updates general error value in redux state object
            return dispatch(updateErrorConsole([{path: "general", msg: 'You have been unable to sign in'}]));                
    }

    //redirects user to new user sign up page
    const signupNew = () => {
        return navigate('/login/signup/');
    }    

    return(
        <div>
            <h1>Sign in</h1>
            <p>Enter your details below to sign in.</p>
            <form onSubmit={handleSubmit}>
                <Form
                  loginProps={context}
                  renderEmail={true}
                  renderPassword={true}                
                />                
                <button type="submit">
                    login                
                </button>
            </form>
            <button onClick={signupNew}>Sign up for a new account</button>
            <button onClick={handleNavigatePasswordReset}>I've forgotten my password</button>
        </div>
    )
}

export default Signin;