import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


const Wrapper = styled.div`
  ul {
    a {
      text-decoration: none;
    }
  }
`;

const IndexPage = ({ data }) => (
    <Layout>

      <Img sizes={data.background.fluid}  />
      
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
      </ul>
    </Layout>
);

export default IndexPage;

export const query = graphql`
  query siteImageQuery {
   background: imageSharp{
    fluid(maxWidth: 1240) {
      aspectRatio
      srcSet
      src
    }
   }  
  }
`;
