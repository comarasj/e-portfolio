import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './utils/navbar';
import Home from './comps/home/home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar/>
          <Route exact path ="/" component={Home} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
