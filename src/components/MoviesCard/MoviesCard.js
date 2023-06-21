import React from 'react';
import { useState } from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
  //Временно
  const [active, setActive] = useState(false);
  //Временно
  function activate() {
    setActive(true);
    console.log(active)
  }

  return (
    <div id="movies-template">
      <article className="movie-card">
        <p className="movie-card__name">{props.film.nameRu}</p>
        <p className="movie-card__time">{props.film.filmLength}</p>
        <img className="movie-card__image" alt={props.film.nameRu} src={props.film.posterUrl} />
        {/* Временно */}
        {!active ?
          <button onClick={activate} className={!props.deleteCardIcon ? 'movie-card__button-save' : 'movie-card__button-save movie-card__button-delete-movie'}></button>
          :
          <button onClick={activate} className={!props.deleteCardIcon ? 'movie-card__button-save movie-card__button-save_active' : ''}></button>
        }
      </article>
    </div>
  )
}
export default MoviesCard;