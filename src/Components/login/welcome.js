import React from 'react';
import { useEffect } from 'react';
import { welcomeDetails } from '../../api/loggedIn';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './logout';
import { inputUsername, inputNextLesson, inputLessonPrice } from './loginSlice';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Welcome = () => {

    const {username, nextLesson, lessonPrice} = useSelector(state => state.login);
    
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await welcomeDetails();
            return response;
        }
        const response = fetchData();
        response.then((res) => {
            
            if (res.success){
            
            dispatch(inputUsername(res.success.username));
            dispatch(inputNextLesson(res.success.next_lesson));
            dispatch(inputLessonPrice(res.success.price));
            
            return;
        }
        console.log('no response');
        return navigate('/login');
        })
    }, [dispatch])

    const loadDelete = (event) => {
        event.preventDefault();
        return navigate('/delete-account');
    }

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
            <button>
              <NavLink
                to="/delete-account"
                className="nav-link"
              >
                Delete account
              </NavLink>
            </button>
            
            
            

        </div>
    )
}

export default Welcome;