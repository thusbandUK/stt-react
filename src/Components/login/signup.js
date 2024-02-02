import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
import { signupRequest } from "../../api/loginCall";

function Signup(){

    const dispatch = useDispatch();
    const username = useSelector(state => state.login.username)

    /*
    const handleChange = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        dispatch(inputUsername({username: e.target.value}));

    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        let myUsername = document.getElementById('username');
        let myPassword = document.getElementById('password');
        let myEmail = document.getElementById('email');
        console.log(myUsername.value);
        //console.log(e.target.value);
        signupRequest(myEmail.value, myUsername.value, myPassword.value);
    }

    return(
        <div>
            <p>Sign up</p>
            <form onSubmit={handleSubmit}>
                <label for="email">
                    Email
                      <input  name="email" id="email"  />                
                </label>
                <label for="username">
                    Username
                      <input  name="username" id="username"  />                
                </label>
                <label for="password">
                    Password
                      <input  name="password" id="password" />                
                </label>
                <button type="submit">
                    login
                
                </button>


            </form>

        </div>
    )
}

export default Signup;