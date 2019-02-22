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
                         My name is Stephen Comarata. I am a Computer Engineering Student at The University of Cincinnati.
                    </div>
                    <div className="picture">
                        <img src={headshot} alt={headshot} height={552} width={441} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Aboutme; 