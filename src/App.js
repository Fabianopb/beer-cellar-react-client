import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Layout from './layout/layout';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" />
          <Route path="/about" />
          <Route path="/topics" />
        </Layout>
      </Router>
    );
  }
}

export default App;
