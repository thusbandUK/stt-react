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
import Y13HealthCheckFeedback from './Components/Resources/y13HealthCheckFeedback';
import Privacy from './Components/Privacy/privacy';
import Blog from './Components/blog/blogs';
import BlogContainer from './Components/blog/blogContainer';
  
//import ReactionsContainer from './components/reactionsContainer/reactionsContainer';
//import Introduction from './components/introduction/Introduction';
//import Home from './components/home/home';
//import LandingPage from './components/landingPage/landingPage';
//import NumberOfAtoms from './features/numberOfAtoms/numberOfAtoms';

  const router = createBrowserRouter(    
    createRoutesFromElements(     
      
      <Route path="/" element={<App />} >
        <Route path="/" element={<Landing />} />
        <Route path="/privacy/" element={<Privacy />} />
        <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:blogPost" element={<BlogContainer />} />
        
        <Route path="/resources/contents/" element={<Resources />} />             
          <Route path="/resources/:resource" element={<ResourceContainer />} /> 
          
        <Route path="/resources/y13-health-check-feedback" element ={<Y13HealthCheckFeedback />} />    
        
          
          
        </Route>
    )
  );

  export default router;  

  /*
removed from between route opened and closer above

  <Route path="/" element={<LandingPage />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/number-of-atoms/" element={<NumberOfAtoms />} />
          <Route path="/transition-metals/introduction/" element={<Introduction />} />             
          <Route path="/transition-metals/:reactant" element={<ReactionsContainer />} />
          <Route />
  */