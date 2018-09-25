import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/Post/PostListing'

const HomeStykles = styled('css')`
  position: relative;
`;


const IndexPage = ({ data }) => (
  <div>
     <Img fluid={data.background.fluid} alt="Bears in the mist." />
    <Layout>
      
      

      <h1>Leo Torres | Web Developer</h1>
      <h2>Websites, Blogs, E-Commerce</h2>
      <p>Custom sites for what you need.</p>
      <div>
        <div>
          <h1 >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListing key={node.id} post={node} />
          ))}
          </h1> 
        </div>
      </div>
      <ul>
        <li >
          <Link to="/about/">Go to the about page</Link>
        </li>
  
        <li>
          <Link to="/contact/">Go to contact page</Link>
        </li>
        <li>
          <Link to="/portfolio/">Go to portfolio page</Link>
        </li>
      </ul>
      
    </Layout>
  </div>    
);


export default IndexPage;

export const query = graphql`
  query siteImageQuery {
    background: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
    }
  }
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        html
      }
    }
  }

  }
`;
