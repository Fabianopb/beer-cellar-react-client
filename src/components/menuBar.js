import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './menuBar.css'

class MenuBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
      this.setState({ isLoggedIn: nextProps.isLoggedIn });
    }
  }

  render() {
    return (
      <div className='menu-bar'>
        <div className='logo'>Beer Cellar</div>
        <div className='login-area'>
          { this.state.isLoggedIn ? 'currently' : 'not'} Logged in
        </div>
      </div>
    );
  }
}

export default MenuBar;


// <div>Welcome!</div> :
// <Link to='/login'>Login</Link>
// <span> | </span>
// <Link to='/register'>Sign in</Link>
// }
