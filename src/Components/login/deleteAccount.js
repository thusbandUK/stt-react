import React, { useState } from 'react';
import { deleteAccount } from '../../api/loggedIn';
import { useDispatch, useSelector } from 'react-redux';
import { inputUsername, reset } from "./loginSlice";
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {

    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = deleteAccount(password);
        response.then((res) => {
            if (res.success){
                console.log(res.success)
                dispatch(reset());
                navigate('/goodbye');
                return;
            } else if (res.error) {
                return console.log(res.error);
            }
            return console.log('something went wrong');
        })

    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        return setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Sorry to see you go!</h1>
            <p>Are you sure you want to delete your account. You will lose all saved settings.</p>
            <p>Enter your password below and click <em>delete</em> to delete your account</p>
            <form onSubmit={handleSubmit}>
              <label for="password">
                Password
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />                
              </label>


                <button type="submit">
                  Delete
                </button>

            </form>

        </div>
    )
}

export default DeleteAccount;