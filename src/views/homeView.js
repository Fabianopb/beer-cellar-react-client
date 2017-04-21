import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './homeView.css'

class HomeView extends Component {
  render() {
    return (
      <div className='home-view'>
        <div className='logo'>Beer Cellar</div>
        <div className='login-area'>
          <Link to='/login'>Login</Link>
          <span> | </span>
          <Link to='/register'>Sign in</Link>
        </div>
      </div>
    );
  }
}

export default HomeView;
