import logo from '../logo.svg';
import './App.css';
import './styles.css';


import React from 'react';
import Header from '../Components/HeaderAndFooter/header';
import Footer from '../Components/HeaderAndFooter/footer';
import Landing from '../Components/Landing/landing';
import { Outlet } from "react-router-dom";
import ScrollToAnchor from '../hashScroll';
import { HelmetProvider } from 'react-helmet-async';

//import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';

//import Home from '../components/home/home.js';
//import { NavLink } from 'react-router-dom';
//import { useParams, useLocation } from 'react-router-dom';
//import usePageTracking from './usePageTracking';
//import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";



function App() {

   

  return (
    <HelmetProvider>
    <div className="App">
      <ScrollToAnchor />
      <Header 
      
      />
      <Outlet />
      {/*<Landing />*/}
      
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;

/*

culled from boilerplatec:\Users\tadat\Dropbox\coding\personal projects\Science Tutor Tom\Science Tutor Tom code\styles.css

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/