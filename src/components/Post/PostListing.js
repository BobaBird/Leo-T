import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ post }) => <div>
    {/* <h3>{post.frontmatter.title}</h3> */}
    {/* <h3>{post.frontmatter.date}</h3> */}
    <div dangerouslySetInnerHTML={{
        __html: post.html
    }}>

    </div>
</div>;

export default PostListing;