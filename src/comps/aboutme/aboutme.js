import React, { Component } from 'react';
import "./aboutme.css";
import headshot from "../../static/headshot.JPG";

class Aboutme extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }

    render() {
        return (
            <div className="about-wrapper">
                <h1 className="header">About Me</h1>
                <div className="about">
                    <div className="details">
                        <h3 className="section-header">Introduction</h3>
                        <p className="block-text">My name is Stephen Comarata. I am a Computer Engineering Student at The University of Cincinnati and will graduate in Spring 2021. </p>
                        <h3 className="section-header">Experience and Interests</h3>
                        <p className="block-text">{experience}</p>
                        <h3 className="section-header">Other Interests</h3>
                        <p className="block-text">Outside of the classroom and the workforce, I enjoy hiking outdoors, visiting local coffee houses, and participating in events around campus such as UC Football. I also enjoy playing sand volleyball, kayaking, and camping in various state parks in Ohio, Indiana, and Kentucky. </p>
                    </div>
                    <div className="picture">
                        <img src={headshot} alt={headshot} height={552} width={441} />
                    </div>

                </div>
            </div>
        )
    }
}

// eslint-disable-next-line
const experience = "I am passionate about hardware, software, and how it all works together. \
    So far I have co-oped twice, both rotations being at Siemens PLM Software. Both semesters I worked \
    within the quality team, developing informational dashboards and  mockups for product developers and managers. \
    My work was mostly focused in web development, data analysis, and database population. \
    Outside of work I am interested in technologies such as Arduino, web development, Object-Oriented Programming, and Open Source APIs. \
    Some of my personal projects can be found under the projects' tab and a more in depth look into my co-ops can be found under the co-op's tab\
    "

export default Aboutme; 