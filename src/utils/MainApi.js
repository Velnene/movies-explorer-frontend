class SaveMovies {

  constructor() {
    this._url = "https://api.mydiplomeviktor5211.nomoredomains.rocks";
  }

  getSavedFilm() {
    return fetch(this._url, {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  signUp(name, email, password) {
    return fetch(this._url + "/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  signIn(email, password) {
    return fetch(this._url + "/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  getUserInfo(jwt) {
    return fetch(this._url + '/users/me', {
      headers: {
        authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  getSign(jwt) {
    return fetch(this._url + '/users/me', {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

}

const apiSaveMovies = new SaveMovies();
export default apiSaveMovies;