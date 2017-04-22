import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../modules/auth';

import './menuBar.css'

class MenuBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      redirectOnLogOut: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
      this.setState({ isLoggedIn: nextProps.isLoggedIn });
    }
  }

  _logout(event) {
    event.preventDefault();
    Auth.clearSession();
    this.props.setLoginState(false);
    this.setState({ redirectOnLogOut: <Redirect to='/login' /> });
  }

  render() {
    return (
      <div className='menu-bar'>
        <div className='logo'>Beer Cellar</div>
        <div className='login-area'>
          { this.state.isLoggedIn ? (
            <div>
              <span>Welcome! | </span>
              <a href="#" onClick={ this._logout.bind(this) }>Log out</a>
            </div>
          ) : (
            <div>
              <Link to='/login'>Login</Link>
              <span> | </span>
              <Link to='/register'>Sign in</Link>
            </div>
          )}
        </div>
        { this.state.redirectOnLogOut }
      </div>
    );
  }
}

export default MenuBar;
