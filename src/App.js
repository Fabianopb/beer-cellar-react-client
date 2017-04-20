import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './views/about';
import Beers from './views/beers';
import Home from './views/home';
import Login from './views/login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={ Login } />
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/beers" component={ Beers } />
      </div>
      </Router>
    );
  }
}

export default App;
