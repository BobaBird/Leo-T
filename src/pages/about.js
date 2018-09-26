import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import Layout from '../components/layout';

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
  // text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  // color: #4d4d4d;
  color: #fff;
  p {
    
  }
  a {
    // color: #4d4d4d;
    color: #fff;
    // color:#4d4d4d;
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
}
`;

const AboutPage = ({ data }) => (
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

        <h1>About</h1>
        <p>Read all about meh</p>
        <Link to="/">Go back to the homepage</Link>

      </Container>

    </Layout>
  </OuterWrapper>        
);

export default AboutPage;

export const query = graphql`
  query aboutPage {
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
          excerpt
        }
      }
    }
  }
`;