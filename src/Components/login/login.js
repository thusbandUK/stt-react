import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputUsername } from "./loginSlice";
//import { loginRequest } from "../../api/loginCall";
import Signin from "./signin";
import Signup from "./signup";

function Login(){

    const [newUser, setNewUser] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
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
        //loginRequest(myEmail.value, myUsername.value, myPassword.value);
    }

    const toggleUserType = () => {
        newUser ? setNewUser(false) : setNewUser(true);
    }

    return(
        <div>
            { newUser ? <Signup /> : <Signin />}

            <button onClick={toggleUserType}>{ newUser ? "Sign in to an existing account" : "Sign up for a new account"}</button>

        </div>
    )
}

export default Login;