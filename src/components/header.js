import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  position: relative;
  display: inline-flex;
  max-width: 100%;
  padding: 1.45rem 0rem 1.45rem;
  background: inherit;
  marginBottom: 1.45rem;


  h1 {
    font-weight: 500;
    font-size: 2.25rem;
    a {
      text-decoration: none;
      color: #1f2023;
      text-shadow: 0.5px 0.5px 1px #636363, -0.25px -0.25px 2px #636363;
      padding-left: 40px;
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
  z-index: 3;
  min-width: 75vw;
  margin: 0 auto';
  h1 {
    font-weight: 500;
    font-size: 2.25rem;
  }
`;

const NavContainer = styled.div`
  z-index: 3;
  min-width: 25vw;
  margin: 0;

  a {
    &:hover {
      transition: all 230ms ease;
      border-bottom: 5px solid cornflowerblue;
    }
  }
  .active {
    border-bottom: 5px solid cornflowerblue;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>

    <LogoContainer>
      <h1 >
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
