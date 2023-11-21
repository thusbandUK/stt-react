import React from "react";
import { NavLink } from 'react-router-dom';
import Link from "../HeaderAndFooter/Link";

function ResourceLink(props){

  function external() {
    if (props.hyperLinkExternal === 'true'){
    return {to: props.hyperLink, target: "_blank"};
  } else {
    return {to: `/resources/${props.hyperLink}`, target: "_self"};
  }  
  } 
  
  

    
    return(
        <div className="card mb-3 w-100 mt-5 menu-card-body" >  
            <NavLink 
                    to={external().to}
                    className="nav-link"  
                    target={external().target}
                    rel="noreferrer"                    
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

