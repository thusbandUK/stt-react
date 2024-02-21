import React, { useState } from 'react';
import { resetPassword } from '../../api/loginCall';

const Reset = () => {

    const [resetStatus, setResetStatus] = useState("Enter your email then click to reset password.")
    const [email, setEmail] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = resetPassword(email);
        response.then((res) => {      
            if (res.error){
                console.log(res.error);
                return setResetStatus(res.error);
            }     
            if (res.success){
                console.log("email sent!");
                return setResetStatus("email sent!");
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
            <h1>Reset password</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">
                    Email
                      <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />                
                </label>


                <button type="submit">Reset password</button>
            </form>
            <p>{resetStatus}</p>

        </div>
    )
}

export default Reset;