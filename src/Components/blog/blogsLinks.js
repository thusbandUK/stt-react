import React from "react";
import { NavLink } from 'react-router-dom';
import Link from "../HeaderAndFooter/Link";

function BlogLink(props){

    
    return(
        <div className="card mb-3 w-100 mt-5 menu-card-body" >  
            <NavLink 
                    to={
                        (props.hyperLinkExternal === 'true') ? 
                        props.hyperLink    :            
                        `/blog/${props.hyperLink}`
                    }
                    className="nav-link"                   
                  >                    
                
        
                    <Link 
                    imageLink={props.imageLink}
                    altText={props.altText}
                    title={props.blogTitle}
                    description={props.blogDescription}
                    lastUpdated={props.lastUpdated}
                    />
          
            
            </NavLink>
          
        </div>
    )
}

export default BlogLink;