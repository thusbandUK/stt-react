import React from 'react';
import { resetPassword } from '../../api/loginCall';
import Form from "./form";
import { useOutletContext } from "react-router-dom";
import { updateErrorConsole, reset } from "./loginSlice";
import { useDispatch } from 'react-redux';

/*
This is element from which user can *request* a password reset by inputting email address
*/

const Reset = () => {

    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { email, setEmail } = context;

    const dispatch = useDispatch();

    //handles API call to request a password reset
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await resetPassword(email);
        //resets error message console
        dispatch(reset());
            if (response.error){
                //updates the redox store with error messages
                return dispatch(updateErrorConsole(response.error.messages));                
            }     
            if (response.success){
                //resets email value in parent element Login state to null
                setEmail("")
                //updates redox store with success message
                return dispatch(updateErrorConsole([{path: "general", msg: 'Email sent!'}]));
            }
            //failsafe error message
            return dispatch(updateErrorConsole([{path: "general", msg: 'looks like something went wrong'}]));        
    }    

    return (
        <div>
            <h1>Reset password</h1>
            <form onSubmit={handleSubmit}>
              <Form
                loginProps={context}
                renderEmail={true}                  
              />
              <button type="submit">Reset password</button>
            </form>
        </div>
    )
}

export default Reset;