import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Layout from './layout/layout';

import About from './views/about';
import Home from './views/home';
import Login from './views/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={ Login } />
          {/*<Layout>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
          </Layout>*/}
        </div>
      </Router>
    );
  }
}

export default App;
