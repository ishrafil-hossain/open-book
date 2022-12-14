import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container bg-white pt-5 pb-5'>
            <h4 className='container text-start'>About the Project</h4>
            <div className='about-info container'>
                <div className='about-info-div'>
                    <h5 className='about-head'>Open Library is an open, editable library catalog, building towards a web page for every book ever published. <a href="/">More</a> </h5>

                    <p className='small'>Just like Wikipedia, you can contribute new information or corrections to the catalog. You can browse by <a href="/">subjects</a>, <a href="/">authors</a> or <a href="/">lists</a> members have created. If you love books, why not help build a library?</p>
                </div>
                <div className='small'>
                    <h5>
                        <a href="/">Latest Blog Posts</a>
                    </h5>
                    <p> <a href="/">2022 Review</a>- November 23, 2022</p>
                    <p> <a href="/">Search for Books in your Reading Log</a>- November 23, 2022</p>
                    <p> <a href="/">Improvements to the Main Navigation </a>- November 22, 2022</p>

                </div>
            </div>
        </div>
    );
};

export default About;