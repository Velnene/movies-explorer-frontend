import React from 'react';
import { useState } from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
  //Временно
  const [active, setActive] = useState(false);
  //Временно
  function activate() {
    props.saveFilm(props.film);
    setActive(true);
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
          {!active ?
            <button onClick={activate} className={'movie-card__button-save'}></button>
            :
            <button onClick={activate} className={'movie-card__button-save movie-card__button-save_active'}></button>
          }
        </article>}
    </div>
  )
}
export default MoviesCard;