import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './utils/navbar';
import Home from './comps/home/home';
import Aboutme from './comps/aboutme/aboutme';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <div className="contents">
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={Aboutme} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
