import React from 'react';
import { useState } from 'react'
import './MoviesCard.css'
import apiMain from '../../utils/MainApi';

function MoviesCard(props) {
  const [active, setActive] = useState(false);

  function activate() {
    if (!active) {
      props.saveFilm(props.film);
      setActive(true);
    } else {
      const jwt = localStorage.getItem('jwt');
      apiMain.getSavedFilm(jwt)
        .then((res) => {
          let allFilms = res;
          allFilms.forEach(element => {
            console.log(element)
            if (props.film.nameRU === element.nameRU) {
              const jwt = localStorage.getItem('jwt');
              apiMain.deleteFilm(element._id, jwt)
                .then((res) => {
                  setActive(false);
                })
                .catch((err) => {
                  alert(err);
                });
            }
          })
        }).catch((err) => {
          alert(err);
        });
    }
  }

  function delteFilms() {
    props.deleteFilm(props.film._id);
  }

  return (
    <div id="movies-template">
      {props.isSerchfilms ? <article className="movie-card">
        <p className="movie-card__name">{props.film.nameRU}</p>
        <p className="movie-card__time">{props.film.duration}</p>
        <a className='movie-card__link-about-trailer' href={props.film.trailerLink}>
          <img className="movie-card__image" alt={props.film.nameRU} src={`${props.film.image}`} />
        </a>
        <button onClick={delteFilms} className={'movie-card__button-save movie-card__button-delete-movie'}></button>
      </article>
        :
        <article className="movie-card">
          <p className="movie-card__name">{props.film.nameRU}</p>
          <p className="movie-card__time">{props.film.duration}</p>
          <a className='movie-card__link-about-trailer' href={props.film.trailerLink}>
            <img className="movie-card__image" alt={props.film.nameRU} src={`https://api.nomoreparties.co${props.film.image.url}`} />
          </a>
          <button onClick={activate} className={!active ? 'movie-card__button-save' : 'movie-card__button-save movie-card__button-save_active'}></button>
        </article>}
    </div>
  )
}
export default MoviesCard;