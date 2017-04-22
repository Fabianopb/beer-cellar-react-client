class Auth {

  isSessionValid() {
    return +new Date(localStorage.getItem('expiry')) > +new Date();
  }

  setSession(token, expiry) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiry', expiry);
  }

  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
  }

  getSessionToken() {
    return localStorage.getItem('token');
  }

}

export default Auth = new Auth();
