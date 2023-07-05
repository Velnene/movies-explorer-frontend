import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import apiMain from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ isOn, handleToggle }) {
  const deleteCardIcon = true;
  const [films, getFilms] = useState([]);
  const [searchFilms, getSearchFilms] = useState([]);
  const isSerchfilms = true;

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    apiMain.getSavedFilm(jwt)
      .then((res) => {
        let allFilms = res;
        if (window.matchMedia("(max-width: 600px)").matches) {
          getFilms(allFilms);
        }
        else if (window.matchMedia("(max-width: 1500px)").matches) {
          getFilms(allFilms);
        }
      }).catch((err) => {
        alert(err);
      });
  }, []);

  function getSerchFilm(word) {
    if (word === '') {
      return
    }
    console.log(word)
    getSearchFilms(films.filter(element => element.nameRU.match(word)))
  }

  return (
    <section>
      <SearchForm
        isOn={isOn}
        handleToggle={handleToggle}
        getSerchFilm={getSerchFilm}
      />
      {<MoviesCardList
        isSerchfilms={isSerchfilms}
        deleteCardIcon={deleteCardIcon}
        films={searchFilms}
        getSearchFilms={getSearchFilms}
      />}
    </section>
  )
}

export default SavedMovies;