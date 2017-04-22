import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './modules/auth';

import Layout from './views/layout';
import About from './views/about';
import Beers from './views/beers';
import HomeView from './views/homeView';
import Login from './views/login';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Auth.isSessionValid()
    };
  }

  _setLoginState(isLoggedIn) {
    this.setState({ isLoggedIn });
  }

  render() {
    return (
      <Router>
        <Layout isLoggedIn={ this.state.isLoggedIn } setLoginState={ this._setLoginState.bind(this) } >
          <Route path="/login" render={ () => <Login setLoginState={ this._setLoginState.bind(this) } /> } />
          <Route exact path="/" component={ HomeView } />
          <Route path="/about" component={ About } />
          <Route path="/beers" component={ Beers } />
        </Layout>
      </Router>
    );
  }
}

export default App;
