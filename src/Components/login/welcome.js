import React from 'react';
import { useEffect } from 'react';
import { welcomeDetails } from '../../api/loggedIn';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './logout';
import { useNavigate } from 'react-router-dom';
import { inputUsername, inputNextLesson, inputLessonPrice } from './loginSlice';


const Welcome = () => {

    const {username, nextLesson, lessonPrice} = useSelector(state => state.login);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    /*
    useEffect(() => {
        if (!username){
            return navigate("/login");
        }        
    })   

    */
    useEffect(() => {
        const fetchData = async () => {
            const response = await welcomeDetails();
            return response;
        }
        const response = fetchData();
        response.then((res) => {
            console.log(res);
            if (res){
            console.log(res.username);
            dispatch(inputUsername(res.username));
            dispatch(inputNextLesson(res.next_lesson));
            dispatch(inputLessonPrice(res.price));
            console.log(res);
            return;
        }
        return console.log('no response');
        })
    }, [dispatch])

    return (
        <div>
            <p>Welcome {username}</p>
            <p>Your next lesson is at {nextLesson}</p>
            <p>The lesson price is {lessonPrice}</p>
            <Logout />
            

        </div>
    )
}

export default Welcome;