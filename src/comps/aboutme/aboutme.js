import React, { Component } from 'react';
import "./aboutme.css";
//const logoImg = require( "../../static/bode_plot.PNG")

class Aboutme extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }

    render() {
        return (
            <div className="about">
                <h1 className="header">About Me</h1>
                <p>Hello!</p>
                <p> My name is Stephen Comarata. I am a Computer Engineering Student at The University of Cincinnati.
                </p>
           </div>
        )
    }
}

export default Aboutme; 