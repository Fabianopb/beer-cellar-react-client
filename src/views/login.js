import React, { Component } from 'react';
import Requests from '../modules/requests';

class Login extends Component {

  login() {
    const credentials = {
      email: this._email.value,
      password: this._password.value
    };
    Requests.loginUser(credentials).then((response) => {
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="email" ref={ (input) => this._email = input } />
        <input type="password" placeholder="password" ref={ (input) => this._password = input } />
        <button onClick={ this.login.bind(this) }>Log in</button>
      </div>
    );
  }
}

export default Login;
