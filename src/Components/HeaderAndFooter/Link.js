import React from "react";

function Link(props){

    return(
        <div className="row g-0">        
              <div className="col-md-4 d-flex">
                <img src={props.imageLink} className="img-fluid rounded-start" alt={props.altText}></img>
              </div>      
              <div className="col-md-7 whole-menu-link">      
        
                <div className="card-body">
                  <h2 className="card-title">{props.title}</h2>
                  <p className="card-text">{props.description}</p>
                  <p className="card-text"><small className="text-muted">Last updated {props.lastUpdated}</small></p>
                </div>
         
               </div>   
            </div>
    )
}

export default Link;