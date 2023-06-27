class SaveMovies {

  constructor() {
    this._url = "https://api.mydiplomeviktor5211.nomoredomains.rocks";
  }

  getSavedFilm(jwt) {
    return fetch(this._url + '/movies', {
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

  saveFilm(film, jwt) {
    return fetch(this._url + "/movies", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: 'https://api.nomoreparties.co/' + film.image.url,
        trailerLink: film.trailerLink,
        thumbnail: 'https://api.nomoreparties.co/' + film.image.formats.thumbnail.url,
        movieId: film.id,
        nameRU: film.nameRU,
        nameEN: film.nameEN
      })
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

  changeUserInfo({ name, email }, jwt) {
    console.log(name + email)
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
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

  deleteFilm(idFilm, jwt) {
    return fetch(this._url + '/movies/' + idFilm , {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
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

const apiMain = new SaveMovies();
export default apiMain;