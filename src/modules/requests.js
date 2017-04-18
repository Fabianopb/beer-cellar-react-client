import axios from 'axios';

class Requests {

  constructor() {
    this.baseUrl = 'http://beer-cellar-api.herokuapp.com';
  }

  userLogin(credentials) {
    return axios.post(`${this.baseUrl}/user/login`, credentials);
  }

}

export default Requests = new Requests();
