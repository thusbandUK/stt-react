import App from './App/App';
import React from 'react';
import {
    createBrowserRouter,    
    createRoutesFromElements,
    Route,    
  } from "react-router-dom";
import Landing from './Components/Landing/landing';
import Resources from './Components/Resources/resources';
import ResourceContainer from './Components/Resources/resourceContainer';
import Y13HealthCheckFeedback from './features/y13HealthCheck/y13HealthCheckFeedback';
import Privacy from './Components/Privacy/privacy';
import Blog from './Components/blog/blogs';
import BlogContainer from './Components/blog/blogContainer';
import ErrorPage from './error-page';
import Login from './Components/login/login';
import Welcome from './Components/login/welcome';
import Signup from './Components/login/signup';
import Signin from './Components/login/signin';
import Verification from './Components/login/verification';
import VerificationLanding from './Components/login/verificationLanding';
import Email from './Components/login/email';
import Reset from './Components/login/reset';
import ResetLanding from './Components/login/resetLanding';
import DeleteAccount from './Components/login/deleteAccount';
import Goodbye from './Components/login/goodbye';
import LoggedOut from './Components/login/loggedOut';
import Calendar from './Components/scheduling/makeCalendarTest';


  const router = createBrowserRouter(    
    createRoutesFromElements(   
            
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        
        <Route path="/" element={<Landing />} />
        <Route path="/privacy/" element={<Privacy />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:blogPost" element={<BlogContainer />} />        
        <Route path="/resources/contents/" element={<Resources />} />             
        <Route path="/resources/:resource" element={<ResourceContainer />} />          
        <Route path="/resources/y13-health-check-feedback" element ={<Y13HealthCheckFeedback />} />
        
        <Route path="/login" element={<Login />} >
          <Route path="/login/signup" element={<Signup />} />          
          <Route path="/login/signin" element={<Signin />} />          
          <Route path="/login/welcome-user" element={<Welcome />} />
          <Route path="/login/verification" element={<Verification />} />
          <Route path="/login/resend-email" element={<Email />} />
          <Route path="/login/verification-landing" element={<VerificationLanding />} />
          <Route path="/login/reset-password" element={<Reset />} />
          <Route path="/login/reset-landing" element={<ResetLanding />} />
          <Route path="/login/delete-account" element={<DeleteAccount />} />
          <Route path="/login/goodbye" element={<Goodbye />} />
          <Route path="/login/logged-out" element={<LoggedOut />} />
        </Route>
        <Route path="/calendar" element={<Calendar />} />
      </Route>          
    )
  );

  export default router;