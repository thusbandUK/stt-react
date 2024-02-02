import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
import { loginRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';

function Signin(){

    const dispatch = useDispatch();
    const username = useSelector(state => state.login.username)
    const navigate = useNavigate();

    /*
    const handleChange = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        dispatch(inputUsername({username: e.target.value}));

    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        //let myUsername = document.getElementById('username');
        let myPassword = document.getElementById('password');
        let myEmail = document.getElementById('email');
        //console.log(myUsername.value);
        //console.log(e.target.value);
        const login = loginRequest(myEmail.value, myPassword.value);
        if (login) {
            navigate('/welcome-user');
        }
    }

    return(
        <div>
            <p>Sign in</p>
            <form onSubmit={handleSubmit}>
                <label for="email">
                    Email
                      <input  name="email" id="email"  />                
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

export default Signin;