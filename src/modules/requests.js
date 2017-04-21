import axios from 'axios';

class Requests {

  constructor() {
    this.baseUrl = 'http://beer-cellar-api.herokuapp.com';
    // this.baseUrl = 'http://localhost:9000';
  }

  loginUser(credentials) {
    return axios.post(`${this.baseUrl}/user/login`, credentials);
  }

  getUserProfile(token) {
    return axios.get(`${this.baseUrl}/user/profile`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getBeers(token) {
    return axios.get(`${this.baseUrl}/beers`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }

}

export default Requests = new Requests();
