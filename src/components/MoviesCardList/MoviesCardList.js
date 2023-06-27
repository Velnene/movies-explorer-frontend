import './MoviesCardList.css'
import React, { useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonMore from '../ButtonMore/ButtonMore';
import apiMain from '../../utils/MainApi'

function MoviesCardList({ films, deleteCardIcon, isSerchfilms, deleteFilm }) {
  const [moreButton, setMoreButton] = useState(false);

  function saveFilm(films) {
    const jwt = localStorage.getItem('jwt');
    apiMain.saveFilm(films, jwt)
      .then((res) => {
        console.log('фильм сохранен');
        alert(res);
      })
      .catch((res) => {
        alert(res);
      })
  }

  return (
    <>
      <section className='movies-card-list'>
        {films.map((film) => (
          <MoviesCard
            isSerchfilms={isSerchfilms}
            saveFilm={saveFilm}
            film={film}
            key={film.id || film._id}
            deleteCardIcon={deleteCardIcon}
            deleteFilm={deleteFilm}
          />
        ))}
      </section>
      {moreButton ?
        <ButtonMore />
        : <div className='indent'></div>
      }
    </>
  )
}

export default MoviesCardList;