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
import { useParams, useLocation } from 'react-router-dom';

//page tracking is for google analytics to follow what's afoot
//import usePageTracking from './usePageTracking';

//import { Outlet } from "react-router-dom";
//import Menu from '../features/menu/Menu';

//import Home from '../components/home/home.js';
//import { NavLink } from 'react-router-dom';
//import { useParams, useLocation } from 'react-router-dom';
//import usePageTracking from './usePageTracking';
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";



function App() {

  const pathName = useLocation().pathname;

  //let cookieDisplay = "hidden";

  /*
  let cookieDisplay;

  function handleCookies(){
    console.log('handleCookies function called');
    resetCookieConsentValue();
    
    cookieDisplay = "show";
    console.log(cookieDisplay);
  }

  visible={cookieDisplay}

  handleCookies={handleCookies}
  */
  

  return (
    <HelmetProvider>
      
      <CookieConsent
      enableDeclineButton
      
      onDecline={() => {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'        
          });
          console.log('permission denied');
      }}
      onAccept={() => {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'        
          });
          console.log('permission granted');
      }}
      >This website uses cookies to enhance the user experience.</CookieConsent> {/**/}
    <div className="App">
      <ScrollToAnchor />
      <Header 
      pathName={pathName}
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