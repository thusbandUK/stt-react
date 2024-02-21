import React, { useState } from 'react';
import { resendVerificationEmail } from '../../api/loginCall';


const Email = () => {

    const [emailStatus, setEmailStatus] = useState("Click the button to send a test email")
    const [email, setEmail] = useState(null);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = resendVerificationEmail(email);
        response.then((res) => {      
            if (res.error){
                console.log(res.error);
                return setEmailStatus(res.error);
            }     
            if (res.success){
                console.log("email sent!");
                return setEmailStatus("email sent!");
            }
            return console.log('looks like something went wrong');

        })
    }

    const handleEmailChange = (event) => {
        event.preventDefault();
        return setEmail(event.target.value);
    }


    return (
        <div>
            <p>You have been redirected here because you need to verify your email. This might be because the link
                we sent you did not arrive or because the link has expired. Please enter your email address below
                to send a fresh verification link.
            </p>
            <form onSubmit={handleSubmit}>
                <label for="email">
                    Email
                      <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />                
                </label>
                <button type="submit">Click to send new verification link</button>
            </form>
            
            <p>{emailStatus}</p>

        </div>
    )
}

export default Email;