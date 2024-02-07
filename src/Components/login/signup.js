import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
import { signupRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';

function Signup(){

    const dispatch = useDispatch();
    //const username = useSelector(state => state.login.username)
    const navigate = useNavigate();

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
        const response = signupRequest(myEmail.value, myUsername.value, myPassword.value);
        response.then((res) => {
            if (res){
                navigate('/welcome');

            }
            console.log('this is the front end logging');
            console.log(res);
        })

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
                      <input type="password" name="password" id="password" />                
                </label>
                <button type="submit">
                    login
                
                </button>


            </form>

        </div>
    )
}

export default Signup;