import React from "react";
import { useDispatch } from 'react-redux';
import { inputEmail, updateErrorConsole, reset } from "./loginSlice";
import { signupRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';
import Form from './form';
import { useOutletContext } from "react-router-dom";

function Signup(props){
    
    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { email, username, password} = context;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //redirects user to login to an existing account
    const handleClick = () => {
        return navigate('/login/signin');
    }

    //handles signup POST request
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await signupRequest(email, username, password);
        //this needs sorting at some point but it varies, email and username should persist, password should clear
        //but when password is cleared, the dots also need to disappear - links with e.preventDefault() which clears all values
        /*setUsername(null);
        setPassword(null);
        setEmail(null);*/
        dispatch(reset());
        
            if (response.success){
                console.log(response.success);
                //updates redux state object with email, in case verification email needs resending
                dispatch(inputEmail(response.success.email));
                //redirects user to verification
                return navigate('/login/verification');                
            }
            if (response.error){
                //updates error values in redux state object
                return dispatch(updateErrorConsole(response.error.messages));
            }            
            //Updates general error value in redux state object
            return dispatch(updateErrorConsole([{path: "general", msg: 'You have been unable to signup'}]));
    }    

    return(
        <div>
            <h1>Sign up</h1>
            <p>Enter your details in the form below to create a new account</p>
            <form onSubmit={handleSubmit}>
                <Form 
                loginProps={context}
                renderEmail={true}
                renderUsername={true}
                renderPassword={true}                
                />
                
                <button type="submit">
                    Sign Up                
                </button>
                
                
            </form>
            <button onClick={handleClick}>Sign in to an existing account</button>

        </div>
    )
}

export default Signup;