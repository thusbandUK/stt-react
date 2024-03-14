import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { reset } from "./loginSlice";

/*
Login

This is the parent component for anything relating to logging in, including: 
  signing up
  signing in
  verifying email (instruction page and landing page)
  resetting password (instruction page and landing page)
  logging out
  deleting account
  goodbye page

Login holds a state outside of the redux state object for sensitive details, namely username, password and email (although
    username and email are both passed to the redux state upon authentication but never password)
These are passed via functions handleEmailChange etc below, which are passed via react-router-dom context function (analagously to
    props) to child elements, eg: signup, signin etc. As Login also holds the values stored for email, username and password,
    they are also passed via Context to the child elements

    child elements each have their own url path, API call, content, eg: "Here is where you signup" etc and button (which triggers
        api call)
    
    child elements render Form element, passing booleans to props renderEmail, renderPassword, renderUsername, which conditionally render

    there are four kinds of error message passed to the redux store: email, username, password, general. The first three are rendered
    directly below the corresponding form fields in the Form element, while general is passed in this the login element

*/

function Login(){

    const dispatch = useDispatch();    
    const navigate = useNavigate();
    const [ username, setUsername ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const { general: loginStatus } = useSelector(state => state.login.error)
    
    //redirects user, takes string argument and redirects user accordingly, also resets redox store login object
    const handleRedirect = (pathFragment) => {
        return setTimeout(() => {
            dispatch(reset());
            return navigate(`/login/${pathFragment}`);
        }, "5000")
    }    

    const handleEmailChange = (event) => {
        event.preventDefault();
        return setEmail(event.target.value);
    }

    const handleUsernameChange = (event) => {
        event.preventDefault();
        return setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        return setPassword(event.target.value);
    }

    return(
        <div>
            {/*This is the Outlet, which renders different children depending on the link, the context is the Outlet
            equivalent of props */}
            <Outlet              
              context={
                {
                    handleUsernameChange: handleUsernameChange, 
                    handlePasswordChange: handlePasswordChange, 
                    handleEmailChange: handleEmailChange,
                    handleRedirect: handleRedirect,
                    setUsername: setUsername,
                    setEmail: setEmail,
                    setPassword: setPassword,
                    email: email,
                    username: username,
                    password: password
                }
                }
            />
            {/*This is an important element that prints general error messages to the screen for all child elements,
            incl signin, signup, logout etc.*/}
            <p>{loginStatus}</p>
        </div>
    )
}

export default Login;