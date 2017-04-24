import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Request from '../modules/requests';
import Auth from '../modules/auth';

class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 'Loading...'
    };
  }

  componentDidMount() {
    if (Auth.isSessionValid()) {
      this.setState({ data: <Redirect to='/about' /> });
    } else {
      this.setState({ data: this._renderLoginForm() });
    }
  }

  _login() {
    this.setState({ data: 'Loading...' });
    Request.loginUser(this._email.value, this._password.value).then((response) => {
      Auth.setSession.data(response.data.token, response.data.expiry);
      Request.getUserProfile().then((response) => {
        Auth.setSession.username(response.data.name);
        this.props.setLoginState(true);
        this.setState({ data: <Redirect to='/beers' /> });
      });
    }).catch((error) => {
      Auth.clearSession();
      this.setState({ data: this._renderLoginForm() });
      console.log(error.response.statusText, 'invalid login!');
    });
  }

  _renderLoginForm() {
    return (
      <div>
        <input type="text" placeholder="email" ref={ (input) => this._email = input } />
        <input type="password" placeholder="password" ref={ (input) => this._password = input } />
        <button onClick={ this._login.bind(this) }>Log in</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.state.data }
      </div>
    );
  }
}

export default LoginView;
