import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Request from '../modules/requests';
import Auth from '../modules/auth';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
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
    const credentials = {
      email: this._email.value,
      password: this._password.value
    };
    Request.loginUser(credentials).then((response) => {
      Auth.setSession(response.data.token, response.data.expiry);
      this.setState({ data: <Redirect to='/about' /> });
    }).catch((error) => {
      Auth.clearSession();
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

export default Login;
