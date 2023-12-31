import React from "react";
import { useParams, NavLink } from 'react-router-dom';
import blogs from './blogData.json';
import { Interweave } from 'interweave';
import { Helmet } from "react-helmet-async";

function BlogContainer(props){

    const urlSuffix = useParams().blogPost;
    //console.log(urlSuffix);

    const blogIndex = blogs.blogs.findIndex((x)=>{
        //console.log(x.hyperLink);
        return x.hyperLink === urlSuffix;
    })

    const url = `https:sciencetutortom.com/blog/${urlSuffix}`;
    const blogData = blogs.blogs[blogIndex];
    //console.log(blogs.blogs[blogIndex].content);

    const style = {
        backgroundColor: "var(--tan)"        
    }

    return (
        
            <div >
                <div style={style} className="text-box d-flex flex-column" >
                  <h1 className="text-center text-wrap w-75 m-auto fs-1 my-5">{blogs.blogs[blogIndex].blogTitle}
                  </h1>
                  <img className="mb-5 mx-auto" src={blogs.blogs[blogIndex].imageLink} style={{maxWidth: "100%"}} alt={blogs.blogs[blogIndex].altText} ></img>
                </div>
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
                  <meta property="og:image:alt" content={blogData.altText} />
                  <meta property="og:url" content={url} />
                  
                { /* End Facebook tags */ } 
                </Helmet>

                <div className="section">
                
                
                <Interweave 
                content={blogs.blogs[blogIndex].content}
            
                />
                </div> {/*section ends */}
                <div style={style} className="text-box d-flex flex-column" >
                  
                  <NavLink
                  to="/#hero"
                  className="navbar-brand">
                     <h2 className="text-center text-wrap w-75 m-auto fs-1 my-5">Click here for more information about how I tutor</h2>
                  </NavLink>
                  
                  
                  
                </div>
        </div>

    )
}

export default BlogContainer;