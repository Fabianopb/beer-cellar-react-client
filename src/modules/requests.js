import axios from 'axios';

class Requests {

  constructor() {
    this.baseUrl = 'http://beer-cellar-api.herokuapp.com';
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

}

export default Requests = new Requests();
