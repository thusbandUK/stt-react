import React from 'react';
import { deleteAccount } from '../../api/loggedIn';
import Form from "./form";
import { useOutletContext } from "react-router-dom";
import { updateErrorConsole, reset } from "./loginSlice";
import { useDispatch } from 'react-redux';

/*
This is the element to which users are directed if they want to delete their account. Users have to enter a password and they
are redirected to the Goodbye element upon successful deletion of account.
*/

const DeleteAccount = () => {

    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();
    
    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { password, handleRedirect, setPassword } = context;

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await deleteAccount(password);
        //resets error message console in redox store
        dispatch(reset());
        //resets password in parent element Login state
        setPassword("");
            if (response.success){
                //updates redox store with success message
                dispatch(updateErrorConsole([{path: "general", msg: 'Account deleted!'}]));
                //redirects user in parent Login via context
                return handleRedirect("goodbye");                
            } else if (response.error) {
                //updates the redox store with error messages
                return dispatch(updateErrorConsole(response.error.messages));                
            }
            //failsafe error message
            return dispatch(updateErrorConsole([{path: "general", msg: 'Looks like something went wrong. Click refresh and try again.'}]));
    }   

    return (
        <div>
            <h1>Sorry to see you go!</h1>
            <p>Are you sure you want to delete your account. You will lose all saved settings.</p>
            <p>Enter your password below and click <em>delete</em> to delete your account</p>
            <form onSubmit={handleSubmit}>
              <Form
                loginProps={context}
                renderPassword={true}                  
              />
              <button type="submit">
                Delete
              </button>
            </form>
        </div>
    )
}

export default DeleteAccount;