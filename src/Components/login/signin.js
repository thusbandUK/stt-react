import React from "react";
import { useDispatch } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";
import { loginRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';
import Form from "./form";
import { useOutletContext } from "react-router-dom";

function Signin(){

    const dispatch = useDispatch();    
    const navigate = useNavigate();
    
    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { email, password} = context;
   
    //handles login request
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //calls login request POST api function
        const response = await loginRequest(email, password);

        //resets any error messages in the redux store
        dispatch(reset());
        
            if (response.success){                
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

        </div>
    )
}

export default Signin;