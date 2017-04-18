import React, { Component } from 'react';
import Requests from '../modules/requests';

class Login extends Component {

  _doSomething() {
    const credentials = {
      email: this._email.value,
      password: this._password.value
    };
    Requests.userLogin(credentials).then((response) => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="email" ref={ (input) => this._email = input } />
        <input type="password" placeholder="password" ref={ (input) => this._password = input } />
        <button onClick={ this._doSomething.bind(this) }>Log in</button>
      </div>
    );
  }
}

export default Login;
