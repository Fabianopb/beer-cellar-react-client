import React, { Component } from 'react';

class MenuBar extends Component {

  render() {
    return (
      <div className='menu-bar'>
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

export default MenuBar;
