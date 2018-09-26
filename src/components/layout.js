import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';
import { css } from 'react-emotion';

const layoutStyle = css`
  margin: 0 auto;
  padding-top: 0;
`;



const Layout = ({ children }) => (
    <StaticQuery
      query ={graphql`
        query LayoutQuery{
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
      <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className={ layoutStyle } >
          {children}
        
        </div>
        <Footer />
        </>
      )}
    />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;



