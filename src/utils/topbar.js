import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
class Topbar extends Component {
    render() {
        return (
            <nav>
                <div className="bar">
                   <Link to="/" className="links">Stephen Comarata</Link>
                </div>
            </nav>
        )
    }
}

export default Topbar; 