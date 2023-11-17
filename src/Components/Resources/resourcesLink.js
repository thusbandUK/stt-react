import React from "react";
import { NavLink } from 'react-router-dom';
import Link from "../HeaderAndFooter/Link";

function ResourceLink(props){

    
    return(
        <div className="card mb-3 w-100 mt-5 menu-card-body" >  
            <NavLink 
                    to={
                        (props.hyperLinkExternal === 'true') ? 
                        props.hyperLink    :            
                        `/resources/${props.hyperLink}`
                    }
                    className="nav-link"                   
                  >                    
                
        
                    <Link 
                    imageLink={props.imageLink}
                    altText={props.altText}
                    title={props.resourceTitle}
                    description={props.resourceDescription}
                    lastUpdated={props.lastUpdated}
                    />
          
            
            </NavLink>
          
        </div>
    )
}

export default ResourceLink;

/*
<div className="row g-0">        
              <div className="col-md-4 d-flex">
                <img src={props.imageLink} className="img-fluid rounded-start" alt={props.altText}></img>
              </div>      
              <div className="col-md-7 whole-menu-link">      
        
                <div className="card-body">
                  <h2 className="card-title">{props.resourceTitle}</h2>
                  <p className="card-text">{props.resourceDescription}</p>
                  <p className="card-text"><small className="text-muted">Last updated {props.lastUpdated}</small></p>
                </div>
         
               </div>   
            </div>
*/