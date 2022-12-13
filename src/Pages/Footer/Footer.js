import React from 'react';
import './Footer.css'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer container'>
            <div className='container footer-container'>
                <div>
                    <p>Open Library</p>
                    <div className='library container'>
                        <a href="/">Vision</a>
                        <a href="/">Volunteer</a>
                        <a href="/">Partner With Us</a>
                        <a href="/">Careers</a>
                        <a href="/">Blog</a>
                        <a href="/">Terms of Service</a>
                        <a href="/">Donate</a>
                    </div>
                </div>
                <div>
                    <p>Discover</p>
                    <div className='library'>
                        <a href="/"> Home</a>
                        <a href="/">Books</a>
                        <a href="/">Authors</a>
                        <a href="/">Subjects</a>
                        <a href="/">Collections</a>
                        <a href="/">Advanced Search</a>
                        <a href="/">Return to Top</a>
                    </div>
                </div>
                <div>
                    <p>Develop</p>
                    <div className='library'>
                        <a href="/"> Developer Center</a>
                        <a href="/">API Documentation</a>
                        <a href="/">Bulk Data Dumps</a>
                        <a href="/">Writing Bots</a>
                        <a href="/">Add a Book</a>
                    </div>
                </div>
                <div>
                    <p>Help</p>
                    <div className='library'>
                        <a href="/"> Help Center</a>
                        <a href="/">Report A Problem</a>
                        <a href="/">Suggesting Edits</a>
                        <div className='d-flex'>
                            <a href="/"><FaTwitterSquare size={35} color="black" /></a>
                            <a href="/"><FaGithubSquare size={35} color="black" /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Change Website Language</p>
                    <div className='library container'>
                        <a href="/">Čeština (cs)</a>
                        <a href="/">Deutsch (de)</a>
                        <a href="/">English (en)</a>
                        <a href="/">Español (es)</a>
                        <a href="/">Français (fr)</a>
                        <a href="/">Hrvatski (hr)</a>
                        <a href="/">Português (pt)</a>
                        <a href="/">తెలుగు (te)</a>
                        <a href="/">Українська (uk)</a>
                        <a href="/">中文 (zh)</a>
                    </div>
                </div>
            </div>

            {/* second part  */}
            <div className='footer-second'>
                <div className='footer-end container'>
                    <div>
                        <img src="https://openlibrary.org/static/images/pantheon.png" alt="" />
                    </div>
                    <div className='end-text'>
                        <span className='small'>Open Library is an initiative of the <a href="/">Internet Archive</a>, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in  digital form. Other <a href="/">projects</a> include the <a href="/">Wayback Machine</a>, <a href="/">archive.org</a> and <a href="/">archive-it.org</a> </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;