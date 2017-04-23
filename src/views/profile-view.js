import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Request from '../modules/requests';
import Auth from '../modules/auth';

class ProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    Request.getUserProfile().then((response) => {
      console.log(response);
      this.setState({ data: this._renderUserData(response.data) });
    }).catch((error) => {
      Auth.clearSession();
      console.log(error.response.statusText, 'redirecting to login page...');
      this.setState({ data: <Redirect to='/login' /> });
    });
  }

  _renderUserData(user) {
    return (
      <div>
        <p>User Name: {user.name}</p>
        <p>email: {user.email}</p>
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

export default ProfileView;
