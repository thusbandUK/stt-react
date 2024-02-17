import React, { useEffect } from 'react';
import { verifyEmail } from '../../api/loginCall';

const VerificationLanding = () => {

    /*
    var url_string = window.location.href;
    var url = new URL(url_string);
    let origin;
    if (url.searchParams){
      origin = url.searchParams.get("origin");
    }
    */

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
                    return console.log('email verified');
                }
                if (res.error){
                    return console.log(res.error);
                }
                return console.log('something went wrong');
            })
        } 
        sendEmail();
    }, []);


    return (
        <div>
            <p>Verification Landing Page</p>
        </div>
    )
}

export default VerificationLanding;