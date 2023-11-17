import React from "react";
import { useParams } from 'react-router-dom';
import blogs from './blogData.json';
import { Interweave } from 'interweave';
import { Helmet } from "react-helmet-async";

function BlogContainer(props){

    const urlSuffix = useParams().blogPost;
    console.log(urlSuffix);

    const blogIndex = blogs.blogs.findIndex((x)=>{
        console.log(x.hyperLink);
        return x.hyperLink === urlSuffix;
    })

    const blogData = blogs.blogs[blogIndex];
    console.log(blogs.blogs[blogIndex].content);



/*
Since this is the only current resource, the code works fine, but as additional resources are added, this
code will need to be updated with some kind of logic tree that renders the object by the path chosen
*/

    return (
        
            <div class="section">
                <Helmet>
                { /* Standard metadata tags */ }
                  <title>{blogData.blogTitle}</title>
                  <meta name='description' content={blogData.blogDescription} />
                { /* End standard metadata tags */ }
                { /* Facebook tags */ }
                  <meta property="og:type" content="article" />
                  <meta property="og:title" content={blogData.blogTitle} />
                  <meta property="og:description" content={blogData.blogDescription} />
                  <meta property="og:image" content={blogData.imageLink} />
                  
                { /* End Facebook tags */ } 
                </Helmet>
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