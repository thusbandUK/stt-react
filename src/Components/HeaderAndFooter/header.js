import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props){




return (
    
    /*Navbar*/
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid  d-flex justify-content-between">
                  <NavLink 
                    to={"/"}
                    className="navbar-brand"                   
                  >
                    Science Tutor Tom
                  </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto nav">
            <li className="nav-item">
                  <NavLink 
                    to={"/"}
                    className="nav-link"                   
                  >
                    Home
                  </NavLink>              
            </li>
            <li className="nav-item">
                  <NavLink 
                    to={"/#credentials"}
                    className="nav-link"                                  
                  >
                    Credentials
                  </NavLink>
              
            </li>
            <li className="nav-item">
                  <NavLink 
                    to={"/#approach"}
                    className="nav-link"                                  
                  >
                    Approach
                  </NavLink>
              
            </li>
            <li className="nav-item">
                  <NavLink 
                    to={"/#demo"}
                    className="nav-link"                                  
                  >
                    Demo
                  </NavLink>              
            </li>
            <li className="nav-item">
                  <NavLink 
                    to={"/#publications"}
                    className="nav-link"                                  
                  >
                    Publications
                  </NavLink>
              
            </li>
            <li className="nav-item">
            <NavLink 
                    to={"/#inquiries"}
                    className="nav-link"                                  
                  >
                    Inquiries
                  </NavLink>              
            </li>
            <li className="nav-item">
                  <NavLink 
                    to={"/resources/contents/"}
                    className="nav-link"                   
                  >
                    Resources
                  </NavLink>              
            </li>
            <li className="nav-item">
                  <NavLink 
                    to={"/blog/"}
                    className="nav-link"                   
                  >
                    Blog
                  </NavLink>              
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg></a>              
            </li>   
          </ul>
        </div>
      </div>
    </nav>)

}
export default Header;

/*
removed from resources link
<a class="nav-link" href="./resources.html">Resources</a>

<a className="navbar-brand" href="#">Science Tutor Tom</a>

<a className="nav-link active" aria-current="page" href="#">Home</a>

<a className="nav-link" href="#credentials">Credentials</a>

<a className="nav-link" href="#approach">Approach</a>

<a className="nav-link" href="#demo">Demo</a>

<a className="nav-link" href="#publications">Publications</a>

<a className="nav-link" href="#inquiries">Inquiries</a>
*/