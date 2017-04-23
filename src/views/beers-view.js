import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Requests from '../modules/requests';
import Auth from '../modules/auth';

class BeersView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
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
      return ( <div key={beer._id}>Beer {beer.name} from {beer.country}</div> );
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
