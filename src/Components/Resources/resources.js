import React from "react";
import { resourceLinkData } from "./resourceLinkData";
import ResourceLink from "./resourcesLink";

function Resources(props){
   

    return (
        
<div className="section">
    
<div className="text-box" >
  <h1 className="text-center text-wrap w-75 m-auto mt-0">Resources
  </h1>
</div>
{resourceLinkData.map((x)=> (
    
    <ResourceLink
      key={x.id}
      altText={x.altText}
      resourceTitle={x.resourceTitle}
      imageLink={x.imageLink}      
      hyperLink={x.hyperLink}
      hyperLinkExternal={x.hyperLinkExternal}
      resourceDescription={x.resourceDescription}
      lastUpdated={x.lastUpdated}
      
    />
    
))}



</div>


    )
}

export default Resources;