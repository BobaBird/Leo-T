import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import Layout from '../components/layout';

const OuterWrapper = styled('div')`
position: relative;
// background: black;
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
    // color: #4d4d4d;
    // color: #fff;
    color: #4d4d4d;
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
}
`;

const ContactPage = () => (
  <OuterWrapper>
    <Layout>
      <Container>
        <h1>Contact</h1>
        <p>Welcome to the contact page</p>

        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: </label>   
              <input type="text" name="name" required />
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" required /></label>
          </p>
          
          <p  >
            <label style={{display: 'block', marginLeft: '60px', paddingBottom: '30px'}} >Message </label>
            <textarea name="message" required ></textarea>
            
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  </OuterWrapper>
);

export default ContactPage;
