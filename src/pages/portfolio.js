import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import Layout from '../components/layout';

const OuterWrapper = styled('div')`
position: relative;
// background: black;
background: #323944;
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
  color: #4d4d4d;
  // color: #fff;
  p {
    
  }
  a {
    color; #4d4d4d;

    &:hover {
      color: #898989;
      border-bottom: 2px solid;
    }
}
`;


const Portfolio = () => (
      <OuterWrapper>
        <Layout>
          <Container>

            <h1>Portfolio</h1>
            <p>Welcome to the portfolio page</p>

            <Link to="/">Go back to the homepage</Link>
            
          </Container>
        </Layout>
      </OuterWrapper>
) 

export default Portfolio;




