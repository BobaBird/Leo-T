import React from 'react';
import styled from 'react-emotion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
// import FaTwitter from 'react-icons/lib/fa/twitter';
// import FaFacebook from "react-icons/lib/fa/facebook";
// import FaGooglePlus from "react-icons/lib/fa/google-plus";
// import FaEnvelope from "react-icons/lib/fa/envelope";
// import FaPinterest from "react-icons/lib/fa/pinterest";
// import FaLinkedin from "react-icons/lib/fa/linkedin";
import { ShareButtonOutline, ShareBlockStandard } from 'react-custom-share';

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
            FiTwitter {
                height: 1.3em;
                width: 1.3em;
                font-weigth: lighter;
    
                &:hover {
                stroke-width: 0;
                color: orange;
                fill: #00aced !important;
                }
            }
            svg {
                height: 1.3em;
                width: 1.3em;
                font-weigth: lighter;
            }
            #twitter:hover {
                stroke-width: 0;
                color: orange;
                fill: #00aced !important;
            }
            #facebook:hover {
                stroke-width: 0;
                color: orange;
                fill: #3b5998 !important;
            }
            #linkedin:hover {
                stroke-width: 0;
                color: orange;
                fill: #0077B5 !important;
            }
            #mail:hover {
                stroke-width: 0;
                color: orange;
                fill: orange !important;
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
        // const shareBlockProps = {
        //     url: "https://localhost:8000/",
        //     button: ShareButtonOutline,
        //     buttons: [
        //       { network: "Twitter", icon: FiTwitter },
        //       { network: "Facebook", icon: FiFacebook },
        //     //   { network: "GooglePlus", icon: FiGooglePlus },
        //       { network: "Email", icon: FaEnvelope },
        //     //   { network: "Pinterest", icon: FiPinterest, media: "https://localhost:8000/image-to-share.jpg" },
        //       { network: "Linkedin", icon: FaLinkedin }
        //     ],
        //     text: `Give it a try - mywebsite.com `,
        //     longtext: `Take a look at this super website I have just found.`
        //   };
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
                               <a href=""><FaEnvelope id="mail" /></a> 
                            </li>
                            <li>
                               <a href=""><FaLinkedin id="linkedin" /></a> 
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