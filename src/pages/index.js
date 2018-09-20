import React from 'react';
import { Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


const IndexPage = ( ) => (
  <StaticQuery 
  query={graphql`
      query HomeQuery {
        site {
          siteMetadata {
            title
          }
        }
        allImageSharp(filter: {
          fluid: {originalName: {regex: "/home-bg.jpg/"}}
        }) {
          edges {
            node {
              id
              fluid(maxWidth: 1140) {
                src
              }
            }
          }
        }
      }
    `}
    render={data => ( 
      <Layout>
        <Img 
          fluid={data}
        />   
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
          <li>
            <Link to="/about/">Go to the about page</Link>
          </li>
    
          <li>
            <Link to="/contact/">Go to contact page</Link>
          </li>
        </ul>
      </Layout>

    )}
  />

);

export default IndexPage;
