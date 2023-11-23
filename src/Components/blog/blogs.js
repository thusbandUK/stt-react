import React from "react";
import BlogLink from "./blogsLinks";
import blogs from './blogData.json';

function Blog(props) {

const blogData = blogs.blogs;
//console.log(blogData);

    return(
        
            <div className="section">                
    
    <div className="text-box" >
      <h1 className="text-center text-wrap w-75 m-auto mt-0">Blog
      </h1>
    </div>
    {blogData.map((x)=> (
        
        <BlogLink
          key={Number(x.id)}  
          altText={x.altText}
          blogTitle={x.blogTitle}
          imageLink={x.imageLink}      
          hyperLink={x.hyperLink}
          hyperLinkExternal={x.hyperLinkExternal}
          blogDescription={x.blogDescription}
          lastUpdated={x.lastUpdated}
        />
        
    ))}
    
     {/***/}
    
    </div>

        
    )
}

export default Blog;