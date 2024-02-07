import React from 'react';
import { logoutRequest } from '../../api/loginCall';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { inputUsername } from "./loginSlice";

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async() => {
        console.log('logout button clicked');
        const logoutResponse = logoutRequest();
        logoutResponse.then((res) => {
            if (res === 'You have successfully logged out'){
                console.log('You have successfully logged out')
                dispatch(inputUsername(""));
                navigate('/login');
            } else {
                console.log('Problem with logging out, please try again');
            }
        })
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;