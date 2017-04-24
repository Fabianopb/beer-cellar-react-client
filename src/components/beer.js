import React, { Component } from 'react';

class Beer extends Component {

  render() {
    return (
      <div>
        Beer {this.props.name} from {this.props.country}
      </div>
    );
  }
}

export default Beer;
