import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './views/about';
import Beers from './views/beers';
import HomeView from './views/homeView';
import Login from './views/login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={ Login } />
          <Route exact path="/" component={ HomeView } />
          <Route path="/about" component={ About } />
          <Route path="/beers" component={ Beers } />
        </div>
      </Router>
    );
  }
}

export default App;
