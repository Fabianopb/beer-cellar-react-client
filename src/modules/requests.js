import axios from 'axios';
import Auth from './auth';

class Request {

  constructor() {
    this.baseUrl = 'http://beer-cellar-api.herokuapp.com';
    // this.baseUrl = 'http://localhost:9000';
  }

  loginUser(credentials) {
    return axios.post(`${this.baseUrl}/user/login`, credentials);
  }

  getUserProfile() {
    const token = Auth.getSessionToken();
    return axios.get(`${this.baseUrl}/user/profile`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getBeers() {
    const token = Auth.getSessionToken();
    return axios.get(`${this.baseUrl}/beers`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }

}

export default Request = new Request();
