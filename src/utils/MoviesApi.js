export class Api {

  getFilm() {
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
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

  serchFilm(keyword) {
    return fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}`, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
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

const api = new Api();
export default api;