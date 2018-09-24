import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


const ImageWrapper = styled('img')`
  position: relative;
  min-width: 100vh;
`;

const IndexPage = ({ data }) => (
    <Layout>
      <ImageWrapper>
        {/* <Img sizes={data.background.fluid} alt="Bears in the mist." /> */}
      </ImageWrapper>

      <h1>Leo Torres | Web Developer</h1>
      <h2>Websites, Blogs, E-Commerce</h2>
      <p>Custom sites for what you need.</p>
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
);

export default IndexPage;

export const query = graphql`
  query siteImageQuery {
  background: allImageSharp {
    edges {
      next {
        fluid(maxWidth: 1240) {
          aspectRatio
          sizes
          src
        }
      }
    }
   }  
  }
`;
