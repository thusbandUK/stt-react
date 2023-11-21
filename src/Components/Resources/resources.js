import React from "react";
import { resourceLinkData } from "./resourceLinkData";
import ResourceLink from "./resourcesLink";

function Resources(props){
   

    return (
        
<div class="section">
    
<div class="text-box" >
  <h1 class="text-center text-wrap w-75 m-auto mt-0">Resources
  </h1>
</div>
{resourceLinkData.map((x)=> (
    
    <ResourceLink
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