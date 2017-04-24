import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Requests from '../modules/requests';
import Auth from '../modules/auth';

import Beer from '../components/beer';

class BeersView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 'Loading...',
      isBeerFormVisible: false
    };
  }

  componentDidMount() {
    Requests.getBeers().then((response) => {
      this.setState({ data: this._renderBeers(response.data) });
    }).catch((error) => {
      Auth.clearSession();
      console.log(error.message);
      console.log(error.response.statusText, 'redirecting to login page...');
      this.setState({ data: <Redirect to='/login' /> });
    });
  }

  _renderBeers(beers) {
    return beers.map((beer) => {
      return ( <Beer key={beer._id} name={beer.name} country={beer.country} /> );
    });
  }

  _toggleBeerForm(event) {
    event.preventDefault();
    this.setState({ isBeerFormVisible: !this.state.isBeerFormVisible });
    console.log(this.state.data);
  }

  _addBeer() {
    Requests.postBeer(this._name.value, this._country.value).then((response) => {
      // TODO: Refresh the component / concat the new beer
      console.log('We have to refresh the component!', response.data);
      // this.setState({ data: this.state.data.concat([beer]) });
    }).catch((error) => {
      console.log(error.response);
    });
  }

  render() {
    return (
      <div>
        { this.state.isBeerFormVisible ? (
          <div>
            <a href="#" onClick={ this._toggleBeerForm.bind(this) }>Hide form</a>
            <input type="text" placeholder="name" ref={ (input) => this._name = input } />
            <input type="text" placeholder="country" ref={ (input) => this._country = input } />
            <button onClick={ this._addBeer.bind(this) }>Add Beer</button>
          </div>
        ) : (
          <a href="#" onClick={ this._toggleBeerForm.bind(this) }>Add Beer</a>
        ) }
        { this.state.data }
      </div>
    );
  }
}

export default BeersView;
