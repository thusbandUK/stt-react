import React from "react";
import { useParams } from 'react-router-dom';
import blogs from './blogData.json';
import { Interweave } from 'interweave';

function BlogContainer(props){

    const urlSuffix = useParams().blogPost;
    console.log(urlSuffix);

    const blogIndex = blogs.blogs.findIndex((x)=>{
        console.log(x.hyperLink);
        return x.hyperLink === urlSuffix;
    })

    console.log(blogs.blogs[blogIndex].content);



/*
Since this is the only current resource, the code works fine, but as additional resources are added, this
code will need to be updated with some kind of logic tree that renders the object by the path chosen
*/

    return (
        
            <div class="section">
                <div class="text-box" >
                  <h1 class="text-center text-wrap w-75 m-auto mt-0 fs-1 my-5">{blogs.blogs[blogIndex].blogTitle}
                  </h1>
                </div>
                <img className="mb-5" src={blogs.blogs[blogIndex].imageLink} style={{maxWidth: "100%"}} alt={blogs.blogs[blogIndex].altText} ></img>
                <Interweave 
                content={blogs.blogs[blogIndex].content}
            
                />
            
        </div>

    )
}

export default BlogContainer;