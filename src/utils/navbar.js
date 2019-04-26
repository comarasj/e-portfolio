import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="topbar">
                    <NavLink exact to="/" className="links" activeClassName='is-active'>Home</NavLink>
                    <NavLink exact to="/aboutme" className="links" activeClassName='is-active'> About Me</NavLink>
                    <NavLink exact to="/coop" className="links" activeClassName='is-active'>Co-op</NavLink>
                    <NavLink exact to="/projects" className="links" activeClassName='is-active'>Projects</NavLink>
                    <NavLink exact to="/skills" className="links" activeClassName='is-active'>Skills</NavLink>
                    <NavLink exact to="/resume" className="links" activeClassName='is-active'>Resume</NavLink>
                </div>
            </nav>
        )
    }
}

export default NavBar; 