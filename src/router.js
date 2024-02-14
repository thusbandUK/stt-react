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
import Email from './Components/login/email';


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
        </Route>
        <Route path="/welcome-user" element={<Welcome />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/send-email" element={<Email />} />
      </Route>          
    )
  );

  export default router;  

