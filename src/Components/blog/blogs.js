import React from "react";
import BlogLink from "./blogsLinks";
import blogs from './blogData.json';

function Blog(props) {

const blogData = blogs.blogs;
console.log(blogData);

    return(
        
            <div class="section">                
    
    <div class="text-box" >
      <h1 class="text-center text-wrap w-75 m-auto mt-0">Blog
      </h1>
    </div>
    {blogData.map((x)=> (
        
        <BlogLink
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