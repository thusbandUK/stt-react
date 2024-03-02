import React, { useEffect, useState } from 'react';
import { verifyEmail } from '../../api/loginCall';
import { useNavigate } from 'react-router-dom';

const VerificationLanding = () => {

    /*
    var url_string = window.location.href;
    var url = new URL(url_string);
    let origin;
    if (url.searchParams){
      origin = url.searchParams.get("origin");
    }
    */
    const [verificationStatus, setVerificationStatus] = useState(null);
    const navigate = useNavigate();

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id") ? url.searchParams.get("id") : null;
    var token = url.searchParams.get("token") ? url.searchParams.get("token") : null;

    useEffect(() => {
        console.log('use effect is working');
        const sendEmail = async () => {
            if (!id || !token){
                return console.log('something went wrong, please generate new link');
            }
            const response = verifyEmail(id, token);
            response.then((res) => {
                if (res.success){
                    //return console.log('email verified');
                    setVerificationStatus('Email verified. Please wait while you are redirected to login');
                    //return navigate('/welcome-user');
                    return setTimeout(() => {
                        return navigate('/login')
                    }, "5000")
                }
                if (res.error){
                    return setVerificationStatus(res.error)
                    //return console.log(res.error);
                }
                return setVerificationStatus('something went wrong');
                //return console.log('something went wrong');
            })
        } 
        sendEmail();
    }, [id, token]);


    return (
        <div>
            <p>Verification Landing Page</p>
            <p>{verificationStatus}</p>
        </div>
    )
}

export default VerificationLanding;