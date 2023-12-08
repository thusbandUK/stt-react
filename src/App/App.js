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
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

function App() {

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
      
      <Header />      
      <Outlet />      
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;

