import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Requests from '../modules/requests';
import Auth from '../modules/auth';

import Beer from '../components/beer';

class BeersView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 'Loading...'
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

  render() {
    return (
      <div>
        { this.state.data }
      </div>
    );
  }
}

export default BeersView;
