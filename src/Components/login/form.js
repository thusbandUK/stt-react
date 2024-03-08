import React from 'react';
import { useSelector } from 'react-redux';

const Form = (props) => {

    //extracts functions and values for form fields from parent parent component login
    const { handleEmailChange, handlePasswordChange, handleUsernameChange, email, username, password } = props.loginProps;

    //extracts boolean variables from parent props
    const { renderEmail, renderUsername, renderPassword } = props;

    //extracts and renames error variables
    const { username: usernameError, password: passwordError, email: emailError} = useSelector(state => state.login.error);
    
    return (
        <div className="d-flex flex-column">

            {/*Conditionally renders email field if prop renderEmail = true */}

                {
                  renderEmail ?
                    <div>
                      <label for="email">
                        Email
                        <input name="email" id="email" onChange={handleEmailChange} value={email} />                
                      </label>
                      {emailError ? <p>{emailError}</p> : null}
                    </div>
                  : null
                }

            {/*Conditionally renders username field if prop renderEmail = true */}
                
                { 
                  renderUsername ?
                    <div>
                      <label for="username">
                        Username
                        <input  name="username" id="username" onChange={handleUsernameChange} value={username} />                
                      </label>
                      { usernameError ? <p>{usernameError}</p> : null }
                    </div>
                  : null 
                }

            {/*Conditionally renders password field if prop renderEmail = true */}

                { 
                  renderPassword ?
                    <div>
                      <label for="password">
                        Password
                        <input type="password" name="password" id="password" onChange={handlePasswordChange} value={password} />                
                      </label>
                      { passwordError ? <p>{passwordError}</p> : null }
                    </div>
                  : null
                }

        </div>
    )
}

export default Form;