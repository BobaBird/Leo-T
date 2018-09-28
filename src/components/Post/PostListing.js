import React from 'react';

const PostListing = ({ post }) => <div>
    {/* <h3>{post.frontmatter.title}</h3> */}
    {/* <h3>{post.frontmatter.date}</h3> */}
    <h2 
    >
    {post.excerpt}
    </h2>
</div>;

export default PostListing;