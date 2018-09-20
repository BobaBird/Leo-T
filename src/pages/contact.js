import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <p>Welcome to the contact page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;
