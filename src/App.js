import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Layout from './layout/layout';
import Home from './views/home';
import About from './views/about';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
        </Layout>
      </Router>
    );
  }
}

export default App;
