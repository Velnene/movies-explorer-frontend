import './MoviesCardList.css'
import React, { useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonMore from '../ButtonMore/ButtonMore';
import apiMain from '../../utils/MainApi'

function MoviesCardList({ films, deleteCardIcon, isSerchfilms, getSearchFilms, handleShowMorePosts, moreButton }) {

  function saveFilm(films) {
    const jwt = localStorage.getItem('jwt');
    apiMain.saveFilm(films, jwt)
      .then((res) => {
        console.log('фильм сохранен');
      })
      .catch((res) => {
        alert(res);
      })
  }

  function deleteFilm(id) {
    const jwt = localStorage.getItem('jwt');
    apiMain.deleteFilm(id, jwt)
      .then((res) => {
        getSearchFilms((items) => items.filter((card) => card._id !== id))
      })
      .catch((err) => {
        alert(err);
      });
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
        <ButtonMore
          handleShowMorePosts={handleShowMorePosts}
        />
        : <div className='indent'></div>
      }
    </>
  )
}

export default MoviesCardList;