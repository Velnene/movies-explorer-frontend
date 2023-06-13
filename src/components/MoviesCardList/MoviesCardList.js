import './MoviesCardList.css'
import React, { useState, useEffect } from 'react'
import api from '../../utils/api';
import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonMore from '../ButtonMore/ButtonMore';

function MoviesCardList() {

  const [films, getFilms] = useState([]);

  useEffect(() => {
    api.getFilm()
      .then((res) => {
        getFilms(res.films.slice(8));
      }).catch((err) => {
        alert(err);
      });
  }, [])

  return (
    <>
      <section className='movies-card-list'>
        {films.map((film) => (
          <MoviesCard
            film={film}
            key={film.filmId} />
        ))}
      </section>
      <ButtonMore />
    </>
  )
}

export default MoviesCardList;