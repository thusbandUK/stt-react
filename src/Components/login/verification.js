import React from 'react';

const Verification = () => {

    const handleClick = () => {
        console.log('send a new email button clicked');
    }

    return (
        <div>
            <p>An email has been sent to the email address with which you signed up. Please check your mails and click the 
                verification link that you find there. You may need to check the spam folder!

                If no email has been sent, please click the button below to send a fresh link.
            </p>
            <button onClick={handleClick}>Send another email</button>
        </div>
    )
}

export default Verification;