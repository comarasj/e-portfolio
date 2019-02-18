import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="sidebar">
                    <Link to="/" className="links">Home</Link>
                    <Link to="/aboutme" className="links"> About Me</Link>
                    <Link to="/coop" className="links">Co-op</Link>
                    <Link to="/projects" className="links">Projects</Link>
                    <Link to="/skills" className="links">Skills</Link>
                    <Link to="/resume" className="links">Resume</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar; 