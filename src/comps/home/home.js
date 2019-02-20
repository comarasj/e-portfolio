import React, { Component } from 'react';
import './home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="homeHeader">
                    Stephen Comarata
                    <div>
                        <a href={"https://github.com/comarasj"} className="ilinks"><FaGithub /></a>
                        <a href={"https://www.linkedin.com/in/stephen-comarata-a68175180/"} className="ilinks"><FaLinkedin /></a>
                    </div>
                </header>

            </div>
        )
    }
}

export default Home;