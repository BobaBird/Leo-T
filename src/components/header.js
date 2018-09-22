import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  position: relative;
  display: inline-flex;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  background: inherit;
  marginBottom: 1.45rem;
  
  h1 {
    a {
      text-decoration: none;
      color: #4d4d4d;
    }
  }
  p {
    color: #4d4d4d;
  }
  ul {
    display: inline-flex;
    margin-right: 20px;
    li {
      list-style: none;
      margin-right: 20px;
      padding-top: 12px;
      font-size: 1.3rem;
    }
  }
  a {
    color: #FF7C00;
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  min-width: 75vw;
  margin: 0 auto';
`;

const NavContainer = styled.div`
  min-width: 25%;
  margin-right: 20px;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>

    <LogoContainer>
      <h1 style={{fontWeight: '500', fontSize: '2.25rem'}}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      
    </LogoContainer>

    <NavContainer >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
      </ul>
    </NavContainer>

  </HeaderWrapper>
);

export default Header;
