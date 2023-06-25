import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import apiSaveMovies from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ isOn, handleToggle }) {
  const deleteCardIcon = true;
  const [films, getFilms] = useState([]);
  const [searchFilms, getSearchFilms] = useState([]);

  useEffect(() => {
    apiSaveMovies.getSavedFilm()
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
        deleteCardIcon={deleteCardIcon}
        films={searchFilms}
      />}
    </section>
  )
}

export default SavedMovies;