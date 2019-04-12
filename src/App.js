import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './utils/navbar';
import Home from './comps/home/home';
import Aboutme from './comps/aboutme/aboutme';
import Coop from './comps/coop/coop';
import Projects from './comps/projects/projects';
import Skills from './comps/skills/skills';
import Resume from './comps/resume/resume';

class App extends Component {
  render() {
    return (
      <header className="App-header">
      <HashRouter>
        <div>
          <NavBar />
          <div className="contents">
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/coop" component={Coop} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </div>
      </HashRouter>
      </header>
    );
  }
}

export default App;
