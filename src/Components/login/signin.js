import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
import { loginRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';

function Signin(){

    const dispatch = useDispatch();
    const username = useSelector(state => state.login.username)
    const navigate = useNavigate();
    //const useState = useState();
    const [loginStatus, setLoginStatus] = useState(null);
    

    /*
    const handleChange = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        dispatch(inputUsername({username: e.target.value}));

    }*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        //let myUsername = document.getElementById('username');
        let myPassword = document.getElementById('password');
        let myEmail = document.getElementById('email');
        //console.log(myUsername.value);
        //console.log(e.target.value);
        
        //const login = await fetch(loginRequest(myEmail.value, myPassword.value));
        const response = loginRequest(myEmail.value, myPassword.value);
        //console.log(response);
        response.then((res) => {
        if (res){
            //dispatch(inputUsername(res.username));
            navigate('/welcome-user');
            return;            
        }
        return setLoginStatus('Login request has failed');
            //console.log(res.username);
            //setUser('hello');
            //PROBLEM HERE IS THAT IF YOU USE SETUSER IT'S ONLY THE STATE OF THIS COMPONENT AND ONCE YOU GO TO ANOTHER
            //ROUTE VIA NAVIGATE, IT WON'T BE THE STATE, UNLESS YOU NEST WELCOME, SO BASICALLY, YOU CAN PUT THE USERNAME
            //AND USER EMAIL IN THE REDUX (NOT THE PASSWORD) AND THEN IT'S THERE WHENEVER THEY NEXT DO ANYTHING
        //setUser(res.username)
        
        })
        
        //console.log(username);
        
        
        //console.log(login);
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
                      <input type="password" name="password" id="password" />                
                </label>
                <button type="submit">
                    login
                
                </button>
                <p>{ loginStatus }</p>


            </form>

        </div>
    )
}

export default Signin;