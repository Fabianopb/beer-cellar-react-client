import React, { Component } from 'react';

class Beer extends Component {

  _editBeer() {
    console.log('clicked to edit beer', this.props);
  }

  _removeBeer() {
    console.log('clicked to remove beer', this.props);
  }

  render() {
    return (
      <div>
        Beer {this.props.name} from {this.props.country}
        <span> | </span><a href="#" onClick={ this._editBeer.bind(this) }>edit</a>
        <span> | </span><a href="#" onClick={ this._removeBeer.bind(this) }>X</a>
      </div>
    );
  }
}

export default Beer;
