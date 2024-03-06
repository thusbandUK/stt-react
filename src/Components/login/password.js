import React, { useState } from 'react';
import { testPassword } from '../../api/loginCall';

const Password = () => {    



    const [testStatus, setTestStatus] = useState("Enter your email then click to reset password.")
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordStatus, setPasswordStatus] = useState(null);
    const [usernameStatus, setUsernameStatus] = useState(null);
    const [emailStatus, setemailStatus] = useState(null);


    const errorParse = (array) => {
        
        console.log(typeof(array));
        array.map((error) => {
            if (error.path === "username"){
                return setUsernameStatus(error.msg)
            } else if (error.path === "password"){
                return setPasswordStatus(error.msg)
            } else if (error.path === "email"){
                return setemailStatus(error.msg)
            } else {
                return setTestStatus(error.msg)
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPasswordStatus(null);
        setUsernameStatus(null);
        setemailStatus(null);
        const response = testPassword(username, email, password);
        response.then((res) => {      
            if (res.error){
                console.log(typeof(res.error));
                return errorParse(res.error.message);
            }     
            if (res.success){
                console.log(res.success.message);
                return setTestStatus(res.success.message);
            }
            return console.log('looks like something went wrong');

        })
    }


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

    return (
        <div>
            <h1>Test password</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <label for="email">
                    Email
                      <input name="email" id="email" onChange={handleEmailChange} value={email} />                
                </label>
                { emailStatus ? <p>{emailStatus} </p> : null}
                <label for="username">
                    Username
                      <input  name="username" id="username" onChange={handleUsernameChange} value={username} />                
                </label>
                { usernameStatus ? <p>{usernameStatus} </p> : null}
                <label for="password">
                    Password
                      <input name="password" id="password" onChange={handlePasswordChange} value={password} />                
                </label>
                { passwordStatus ? <p>{passwordStatus} </p> : null}


                <button type="submit">Reset password</button>
            </form>
            <p>{testStatus}</p>

        </div>
    )

}

export default Password;