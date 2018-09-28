import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const OuterWrapper = styled('div')`
position: relative;
background: #323944;
overflow: hidden;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const Container = styled('div')`
  text-align: center;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.45rem 1.0875rem 1.45rem;

  @media only screen and (maxWidth: 425px) {
    display: inline-block;
    justify-content: space-around;
    // padding-left: 1rem;
  }
  @media only screen and (min-width: 425px) {
    padding: 0 !important;
  }
`;


const Card = styled.div`
// Use Stripe box-shadow values  **philz tip**
  position: relative;
  margin: 20px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  min-width: 400px;
  // max-width: 350px;
  // height: 504px;
  // min-height: 304px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
   p {
     padding: 1rem;
     font-size: 14px;
   }

  @media only screen and (max-width 1082px) and (min-width: 426px) {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 80px;
    p {
      font-size: 0.8rem;
    }
  }
`;


const Portfolio = ({ data }) => (
      <OuterWrapper>
        <Layout>
          <Container>

            <h1>Portfolio</h1>
            <p>Please have a look at some examples of my work.</p>

            <CardContainer>
              <Card>
                <Img
                  
                  fluid={data.card.fluid} 
                />
              </Card>

              <Card>
                <Img
                  
                  fluid={data.card.fluid} 
                />
              </Card>

              <Card>
                <Img
                  
                  fluid={data.card.fluid} 
                />
              </Card>
            </CardContainer>

            <Link to="/">Go back to the homepage</Link>

          </Container>
        </Layout>
      </OuterWrapper>
) 

export default Portfolio;

export const query = graphql`
  query PortfolioQuery {
    card: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
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


