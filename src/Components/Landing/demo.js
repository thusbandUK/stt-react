import React from "react";

function Demo(props){

    return( 
        /*Video demo (embedded from YouTube) width="560" height="315" id="video-container"*/
          <div className="section" id="demo">
            <h2 className="fs-1">Demo</h2>
              <p>Why does heating evaporated milk make caramel? This video captures me in my element, so to speak, using the flavour of 
              banoffee pie as a context to explore an important part of the UK A-level chemistry syllabus - the structure and bonding
              of benzene.</p>
            <iframe id="video-container" src="https://www.youtube.com/embed/TrB3lXkF7w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
           </div>
           )
        }

export default Demo;