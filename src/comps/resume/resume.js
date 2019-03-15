import React, { Component } from 'react';
import "./resume.css";

import resume from "../../static/Stephen_Comarata_resume.pdf"

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }

    render() {
        return (
            <div>
                <h1 className="header">Resume</h1>
                <div className="resume">
                    <a  href={resume} classname="linkbutton">Click here</a>
                </div>
            </div>
        )
    }
}

export default Resume;