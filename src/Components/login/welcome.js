import React from 'react';
import { useEffect } from 'react';
import { welcomeDetails } from '../../api/loggedIn';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './logout';
import { inputUsername, inputNextLesson, inputLessonPrice } from './loginSlice';


const Welcome = () => {

    const {username, nextLesson, lessonPrice} = useSelector(state => state.login);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await welcomeDetails();
            return response;
        }
        const response = fetchData();
        response.then((res) => {
            
            if (res){
            
            dispatch(inputUsername(res.username));
            dispatch(inputNextLesson(res.next_lesson));
            dispatch(inputLessonPrice(res.price));
            
            return;
        }
        return console.log('no response');
        })
    }, [dispatch])

   return (
        <div>
            <p>Welcome {username}</p>
            { nextLesson ?
                <p>Your next lesson is at {nextLesson}</p>
                :
                null            
            }
            { lessonPrice ?
                <p>The lesson price is {lessonPrice}</p>
                :
                <p>We have not yet agreed a lesson price</p>            
            }
            <Logout />
            

        </div>
    )
}

export default Welcome;