import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './views/about';
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
      </div>
      </Router>
    );
  }
}

export default App;
