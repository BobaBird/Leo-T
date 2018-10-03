import React from 'react';
import styled from 'react-emotion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FiTwitter, FiFacebook } from 'react-icons/fi';

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
    padding-top: 150px;
    text-align: center;
    min-height: 380px;
    min-width: 100vw;
    background-color: rgba(20, 20, 20, 1);

    color: #6a6a6a;
`;

const SectionContainer = styled('div')`
    text-align: center;
    justify-content: space-around;
    ul {
        align-items: center;
        li {
            display: inline-flex;
            margin-right: 20px;
            
            svg {
                height: 1.3em;
                width: 1.3em;
                font-weigth: lighter;
            }

            #twitter {
                stroke: #00aced;
                &:hover {
                    stroke-width: 0;
                    color: orange;
                    fill: #00aced !important;
                }
            }
            #facebook {
                stroke: #3b5998;
                &:hover {
                    stroke-width: 0;
                    color: orange;
                    fill: #3b5998 !important;
                }
            }
            #linkedin {
                &:hover {
                    stroke-width: 0;
                    color: orange;
                    fill: #0077B5 !important;
                }
            }
            #mail {
                &:hover {
                    stroke-width: 0;
                    color: orange;
                    fill: orange !important;
                }
            } 
        }
    }
`;

const Titles = styled('h1')`
    font-size: 2rem;
    text-align: center;
`;


class Footer extends React.Component {
    render() {
           return (
                
                <FooterWrapper>
            
                    <SectionContainer>
                        <Titles>Social Media</Titles>
                        <ul>
                            <li>
                               <a href="https://twitter.com/oso_grizz" target="_blank" rel="noopener"><FiTwitter id="twitter" /></a> 
                            </li>
                            <li>
                               <a href=""><FiFacebook id="facebook" /></a> 
                            </li>
                            <li>
                               <a href="/contact/"><FaEnvelope id="mail" /></a> 
                            </li>
                            <li>
                               <a href="https://www.linkedin.com/in/leohtorres/" target="_blank" rel="nopopener"><FaLinkedin id="linkedin" /></a> 
                            </li>
                        </ul>
                    </SectionContainer>
            
                    {/* <SectionContainer>
                        <Titles>Contact</Titles>
                        <ul>
                            <li>Stuff</li>
                            <li>Stuff</li>
                            <li>Stuff</li>
                        </ul>
                    </SectionContainer> */}
            
                    {/* <SectionContainer>
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
                    </SectionContainer> */}
            
                </FooterWrapper>       
            );
    }
    
} 


export default Footer;