import React from 'react';
import styled from "react-emotion";

const FooterWrapper = styled('div')`
    display: flex;
    position: sticky;
    width: 100vw;
    bottom: 0;
    left: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    z-index: 10;

    justify-content: space-around;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
    min-height: 380px;
    min-width: 100vw;
    background-color: rgba(20, 20, 20, 1);
    // background: #323944;
    color: #6a6a6a;
`;

const SectionContainer = styled('div')`
    text-align: center;
    justify-content: space-around;
    ul {
        li {
            display: inline-flex;
            margin-right: 20px;
        }
    }
`;

const Titles = styled('h1')`
    font-size: 2rem;
    text-align: center;
`;


const Footer = () => (
    <FooterWrapper>

        <SectionContainer>
            <Titles>Social Media</Titles>
            <ul>
                <li>Stuff</li>
                <li>Stuff</li>
                <li>Stuff</li>
            </ul>
        </SectionContainer>

        <SectionContainer>
            <Titles>Contact</Titles>
            <ul>
                <li>Stuff</li>
                <li>Stuff</li>
                <li>Stuff</li>
            </ul>
        </SectionContainer>

        <SectionContainer>
            <Titles>Extra</Titles>
            <ul>
                <li>Stuff</li>
                <li>Stuff</li>
                <li>Stuff</li>
            </ul>
        </SectionContainer>
        
        <SectionContainer>
            <Titles>Moar Extra</Titles>
            <ul>
                <li>Stuff</li>
                <li>Stuff</li>
                <li>Stuff</li>
            </ul>
        </SectionContainer>

    </FooterWrapper>       
);

export default Footer;