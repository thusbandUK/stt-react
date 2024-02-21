import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
import { loginRequest } from "../../api/loginCall";
import { useNavigate } from 'react-router-dom';

function Signin(){

    const dispatch = useDispatch();
    //const username = useSelector(state => state.login.username)
    const navigate = useNavigate();
    //const useState = useState();
    const [loginStatus, setLoginStatus] = useState(null);
    //const [username, setUsername] = useState("username");
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //let myPassword = document.getElementById('password');
        //let myEmail = document.getElementById('email');
        
        //const response = loginRequest(myEmail.value, myPassword.value);
        const response = loginRequest(email, password);
        
        response.then((res) => {      
        if (res.error){
            console.log(res.error);
            if (res.error.message.includes("verify")){
                setLoginStatus(res.error.message);
                setTimeout(() => {
                    return navigate('/resend-email')
                }, "5000")
            }
            return setLoginStatus(res.error.message);
        }     
        if (res.success){
            
            navigate('/welcome-user');
            return;            
        }
        return setLoginStatus('Login request has failed');
           
        
        })        
        
    }
    

    return(
        <div>
            <p>Sign in</p>
            <form onSubmit={handleSubmit}>
                <label for="email">
                    Email
                      <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />                
                </label>
                
                <label for="password">
                    Password
                      <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>                
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