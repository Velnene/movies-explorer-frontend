import React from 'react';
import  { useState, useEffect } from 'react'
import './MoviesCard.css'

function MoviesCard(props) {

  useEffect(() => {
    console.log(props.film)
  }, [])

  return (
    <div id="movies-template">
      <article className="movie-card">
        <p className="movies__name">{props.film.nameRu}</p>
        <p className="movies__time">{props.film.filmLength}</p>
        <img className="movies__image" alt={props.film.nameRu} src={props.film.posterUrl} />
        <button className='movies__button-save'></button>
      </article>
    </div>
  )
}
export default MoviesCard;