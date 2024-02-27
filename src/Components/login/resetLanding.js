import React, { useEffect } from 'react';
import { resetPasswordVerifyDetails } from '../../api/loginCall';

const ResetLanding = () => {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id") ? url.searchParams.get("id") : null;
    var token = url.searchParams.get("token") ? url.searchParams.get("token") : null;

    useEffect(() => {
        console.log('use effect is working');
        const secureReset = async () => {
            if (!id || !token){
                return console.log('something went wrong, please generate new link');
            }
            const response = resetPasswordVerifyDetails(id, token);
            response.then((res) => {
                if (res.success){
                    return console.log('ready for new password');
                    //return setVerificationStatus('email verified')
                    //return navigate('/welcome-user');
                }
                if (res.error){
                    //return setVerificationStatus(res.error)
                    return console.log(res.error);
                }
                //return setVerificationStatus('something went wrong');
                return console.log('something went wrong');
            })
        } 
        secureReset();
    }, [id, token]);


    return (
        <div>
            <h1>Enter new password</h1>
        </div>
    )
}

export default ResetLanding;