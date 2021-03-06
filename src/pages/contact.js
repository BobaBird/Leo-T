import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const OuterWrapper = styled.div`
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
  color: #4d4d4d;

  p {
    
  }
  a {
    color: #4d4d4d;
    
    &:hover {

      color: #1f2023;
      border-bottom: 2px solid;
    }
  }

  button {
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    border: red;
    box-shadow: 2px 2px 4px #4d4d4d;
    outline: none;
    width 180px;
    background: red;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 20;

    span {
      z-index: 20;

    }
    &:active {
      background-color: #e01111;
      color: #fff;
      background-size: 100%;
      transition: background 0s;
    }

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: .2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  }
  button:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  input,
  select,
  textarea {

    -webkit-text-fill-color: #4b5970;
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    color: #2276f9;
    font-weight: 500;
  }
  
  textarea {
    border: 1px solid #4d4d4d;
  }
  
`;

const ContactPage = () => (
  <Layout>
    <OuterWrapper>
      <Container>
        <h1>Contact</h1>
        <p>Want to get started; still have questions? Drop me a line.</p>
        <p></p>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: </label>   
              <input type="text" name="name" required />
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" required /></label>
          </p>
          
          <p >
            <label style={{display: 'block', marginLeft: '225px', padding: '20px 0'}} >Message </label>
            <textarea name="message" cols="50" rows="8" required ></textarea>
            
          </p>
          <p>
            <button   type="submit"><span>Send</span></button>
          </p>
        </form>

        <Link to="/">Go back to the homepage</Link>
      </Container>
    </OuterWrapper>
  </Layout>
);

export default ContactPage;
