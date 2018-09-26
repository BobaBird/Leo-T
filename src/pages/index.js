import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/Post/PostListing'

const OuterWrapper = styled('div')`
position: relative;
background: black;
overflow: hidden;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const Container = styled('div')`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  max-width: 960px;
  min-height: 80vh;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  // color: #4d4d4d;
  color: #fff;
  p {
    
  }
  a {
    // color: #4d4d4d;
    color: #fff;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
}
`;


const IndexPage = ({ data }) => (
  <div>
    
    
    
    <OuterWrapper>
    <Layout>


     <Img
     style={{
       position: 'absolute',
       top: '0',
       left: '0',
       width: '100%',
       height: '90%',
       zIndex: '2',
       opacity: '0.8',
      }}
      fluid={data.background.fluid} alt="Bears in the mist." 
      />
      <Container>
        <h1 >Leo Torres | Web Developer</h1>
        <h2 >Websites, Blogs, E-Commerce</h2>
        <p >Custom sites for what you need.</p>
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
          <li>
            <Link  to="/about/">Go to the about page</Link>
          </li>
    
          <li>
            <Link  to="/contact/">Go to contact page</Link>
          </li>
          <li>
            <Link  to="/portfolio/">Go to portfolio page</Link>
          </li>
        </ul>
      </Container>
    </Layout>
    </OuterWrapper>
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
