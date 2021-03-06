import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


const OuterWrapper = styled.div`
  // position: relative;
  // background: black;
  // overflow: hidden;
  // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  // Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0 auto;
  padding-top: 0;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  max-width: 960px;
  min-height: 80vh;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
  p {
    color: #fff;
  }
  a {
    color: #fff; 
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
}
`;

const IndexPage = ({ data }) => (

  <OuterWrapper>
      <Img
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '122.82vh',
        filter: 'brightness(90%)',
      }}
      fluid={data.background.fluid} alt="Bears in the mist." 
      />
      <Layout>

        <Container>
          <h1>Leo Torres | Web Developer</h1>
          <h2 >Websites, Blogs, E-Commerce</h2>
          <p >Custom sites for what you need.</p>
        </Container>

      </Layout>
    </OuterWrapper>


);


export default IndexPage;

export const query = graphql`
  query siteImageQuery {
    background: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
      }
    }
  }
`;