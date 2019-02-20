import React, { Component } from 'react';
import "./resume.css";

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
                <div>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Resume;