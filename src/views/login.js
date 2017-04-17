import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

  _doSomething() {
    const credentials = {
      email: this._email.value,
      password: this._password.value
    };
    axios.post('http://localhost:9000/user/login', credentials)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
