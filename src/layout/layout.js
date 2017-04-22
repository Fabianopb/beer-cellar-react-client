import React, { Component } from 'react';

import MenuBar from '../components/menuBar';

class Layout extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
