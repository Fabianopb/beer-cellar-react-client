import axios from 'axios';
import Auth from './auth';

class Request {

  constructor() {
    this.baseUrl = 'http://beer-cellar-api.herokuapp.com';
    // this.baseUrl = 'http://localhost:9000';

    this.getHeaders = () => {
      return {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Auth.getSessionToken()}`
        }
      };
    }
  }

  loginUser(email, password) {
    return axios.post(`${this.baseUrl}/user/login`, { email, password });
  }

  getUserProfile() {
    return axios.get(`${this.baseUrl}/user/profile`, this.getHeaders());
  }

  getBeers() {
    return axios.get(`${this.baseUrl}/beers`, this.getHeaders());
  }

  postBeer(name, country) {
    return axios.post(`${this.baseUrl}/beers`, { name, country }, this.getHeaders());
  }

}

export default Request = new Request();
