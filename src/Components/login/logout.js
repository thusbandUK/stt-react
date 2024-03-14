import React from 'react';
import { logoutRequest } from '../../api/loginCall';
import { useDispatch } from 'react-redux';
import { updateErrorConsole, reset } from "./loginSlice";
import { useOutletContext } from "react-router-dom";

//logs out user, successful logout redirects to logged-out page

const Logout = () => {

    const dispatch = useDispatch();
    
    //This is the Outlet element (react-router-doum) equivalent of props
    const context = useOutletContext();

    //extracts the values input to the corresponding form fields from the state stored in the parent element Login
    const { handleRedirect } = context;

    const handleLogout = async() => {
        const logoutResponse = await logoutRequest();
        if (logoutResponse.ok){
            dispatch(reset());
            return handleRedirect("logged-out")
        } else {
            return dispatch(updateErrorConsole({messages: [{path: "general", msg: "Hmm, something went wrong. Try clicking the logout button again."}]}))
        }        
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;