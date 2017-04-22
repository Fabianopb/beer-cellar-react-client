class Auth {

  isSessionValid() {
    return +new Date(localStorage.getItem('expiry')) > +new Date();
  }

  setSession = {
      username: (name) => {
        localStorage.setItem('username', name);
      },
      data: (token, expiry) => {
        localStorage.setItem('token', token);
        localStorage.setItem('expiry', expiry);
      }
  };

  clearSession() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
  }

  getSessionToken() {
    return localStorage.getItem('token');
  }

  getSessionUsername() {
    return localStorage.getItem('username');
  }

}

export default Auth = new Auth();
