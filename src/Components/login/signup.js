import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
import { signupRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';

function Signup(){

    const dispatch = useDispatch();
    //const username = useSelector(state => state.login.username)
    const navigate = useNavigate();
    const [signupStatus, setSignupStatus] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleEmailChange = (event) => {
        event.preventDefault();
        return setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        return setPassword(event.target.value);
    }

    const handleUsernameChange = (event) => {
        event.preventDefault();
        return setUsername(event.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        /*let myUsername = document.getElementById('username');
        let myPassword = document.getElementById('password');
        let myEmail = document.getElementById('email');
        console.log(myUsername.value);*/
        //console.log(e.target.value);
        const response = signupRequest(email, username, password);
        response.then((res) => {
            if (res.success){
                return navigate('/verification');
            }
            if (res.error){
                console.log(res.error);
                //need to make a state reference and print (suitable) errors on screen
                return setSignupStatus(res.error);

            }
            console.log('something went wrong');
            //return setLoginStatus('Login request has failed');
            return setSignupStatus('You have been unable to signup');
        })

    }

    return(
        <div>
            <p>Sign up</p>
            <form onSubmit={handleSubmit}>
                <label for="email">
                    Email
                      <input  name="email" id="email" onChange={handleEmailChange} value={email} />                
                </label>
                <label for="username">
                    Username
                      <input  name="username" id="username" onChange={handleUsernameChange} value={username} />                
                </label>
                <label for="password">
                    Password
                      <input type="password" name="password" id="password" onChange={handlePasswordChange} value={password} />                
                </label>
                <button type="submit">
                    login
                
                </button>
                <p>{signupStatus}</p>


            </form>

        </div>
    )
}

export default Signup;