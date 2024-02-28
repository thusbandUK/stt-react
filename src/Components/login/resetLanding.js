import React, { useState } from 'react';
import { enterNewPassword } from '../../api/loginCall';

const ResetLanding = () => {

    const [resetStatus, setResetStatus] = useState(null);
    const [password, setPassword] = useState(null);

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id") ? url.searchParams.get("id") : null;
    var token = url.searchParams.get("token") ? url.searchParams.get("token") : null;

    

    const handlePasswordChange = (event) => {
        event.preventDefault();
        return setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Checks for token and id
        if (!id || !token){
            return console.log('something went wrong, please generate new link');
        }
        const response = enterNewPassword(id, token, password);
        response.then((res) => {
            if (res.success){
                //return console.log('ready for new password');
                return setResetStatus('Enter new password')
                //return navigate('/welcome-user');
            }
            if (res.error){
                return setResetStatus(res.error)
                //return console.log(res.error);
            }
            return setResetStatus('something went wrong');
            //return console.log('something went wrong');
        })
    } 

    

    return (
        <div>
            <h1>Enter new password</h1>            
                <div>
                    <form onSubmit={handleSubmit}>
                      <label for="password">
                        Password
                        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />                
                      </label>
                      <button type="submit">Save new password</button>
                    </form>
                </div>
            <p>{resetStatus}</p>               
        </div>
    )
}

export default ResetLanding;

