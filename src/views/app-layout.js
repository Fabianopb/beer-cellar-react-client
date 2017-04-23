import React, { Component } from 'react';

import MenuBar from '../components/menu-bar';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <MenuBar isLoggedIn={ this.props.isLoggedIn } setLoginState={ this.props.setLoginState } />
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
