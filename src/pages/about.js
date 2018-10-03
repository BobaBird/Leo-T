import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const OuterWrapper = styled('div')`
  margin: 0 auto;
  padding-top: 0;
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

  color: #fff;
  p {
    font-size: 1.8rem;
    line-height: 2.9rem;
    font-weight: 300;
  }
  h2 {
    
  }
  a {

    color: #fff;

    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
}
`;

const AboutPage = ({ data }) => (
  <Layout>
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

      <Container>

        <h1>About</h1>
          <p>
            Hi, my name is Leo Torres. I enjoy making the internet one website at a time. I'm a one
            man team that can provide you with a professional, great looking website to showcase
            your Blog, Business or whatever it is you want to share.
          </p>
            <p><Link to="/portfolio/"> Take a look at some of my work.</Link></p> 
          <p>
            <Link to="/contact/"> Or, let's get started now.</Link>
          </p>

      </Container>

    </OuterWrapper>        
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query aboutPage {
    background: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
      }
    }
  }
`;