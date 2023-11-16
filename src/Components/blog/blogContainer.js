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
        <div>
            <Interweave 
            content={blogs.blogs[blogIndex].content}
            
            />
            
        </div>

    )
}

export default BlogContainer;