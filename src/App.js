import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './modules/auth';

import AppLayout from './views/app-layout';
import ProfileView from './views/profile-view';
import BeersView from './views/beers-view';
import HomeView from './views/home-view';
import LoginView from './views/login-view';

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
        <AppLayout isLoggedIn={ this.state.isLoggedIn } setLoginState={ this._setLoginState.bind(this) } >
          <Route path="/login" render={ () => <LoginView setLoginState={ this._setLoginState.bind(this) } /> } />
          <Route exact path="/" component={ HomeView } />
          <Route path="/profile" component={ ProfileView } />
          <Route path="/beers" component={ BeersView } />
        </AppLayout>
      </Router>
    );
  }
}

export default App;
