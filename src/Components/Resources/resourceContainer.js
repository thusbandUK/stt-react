import React from "react";
import Y13HealthCheckInput from "./y13HealthCheckInput";

function ResourceContainer(props){

/*
Since this is the only current resource, the code works fine, but as additional resources are added, this
code will need to be updated with some kind of logic tree that renders the object by the path chosen
*/

    return (
        <div>
            <Y13HealthCheckInput />
            
        </div>

    )
}

export default ResourceContainer;