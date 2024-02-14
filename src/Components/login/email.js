import React, { useState } from 'react';
import { sendEmail } from '../../api/loginCall';


const Email = () => {

    const [emailStatus, setEmailStatus] = useState("Click the button to send a test email")

    const handleClick = async() => {
        const response = sendEmail();
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


    return (
        <div>
            <button onClick={handleClick}>Click to send test email</button>
            <p>{emailStatus}</p>

        </div>
    )
}

export default Email;