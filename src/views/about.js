import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Requests from '../modules/requests';
import Auth from '../modules/auth';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    Requests.getUserProfile().then((response) => {
      console.log(response);
      this.setState({ data: this._renderUserData(response.data) });
    }).catch((error) => {
      Auth.endSession();
      console.log(error.response.statusText, 'redirecting to login page...');
      this.setState({ data: <Redirect to='/login' /> });
    });
  }

  _logout() {
    Auth.endSession();
    this.setState({ data: <Redirect to='/login' /> });
  }

  _renderUserData(user) {
    return (
      <div>
        <p>User Name: {user.name}</p>
        <p>email: {user.email}</p>
        <button onClick={ this._logout.bind(this) }>Log out</button>
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

export default About;
