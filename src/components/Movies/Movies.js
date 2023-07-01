import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import api from '../../utils/MoviesApi';

function Movies({ isOn, handleToggle }) {

  const [films, getFilms] = useState([]);
  const [searchFilms, getSearchFilms] = useState([]);



  //После перезагрузки страницы, меняется кол-во карточек
  useEffect(() => {
    api.getFilm()
      .then((res) => {
        let allFilms = res;
        getFilms(allFilms);
      }).catch((err) => {
        alert(err.message);
      });
  }, [searchFilms])

  function showTheNumberOfFilms(word, start, end) {
    let findFilms = films.filter(element => element.nameRU.match(word));
    getFilms(getSearchFilms(findFilms.slice(start, end)));
  }

  function getSerchFilm(word) {
    if (word === '') {
      return
    }

    if (window.matchMedia("(max-width: 600px)").matches) {
      showTheNumberOfFilms(word, 0, 5)
    }
    else if (window.matchMedia("(max-width: 800px)").matches) {
      showTheNumberOfFilms(word, 0, 8)
    }
    else if (window.matchMedia("(max-width: 1400px)").matches) {
      showTheNumberOfFilms(word, 0, 12)
    }
  }

  return (
    <>
      <SearchForm
        isOn={isOn}
        handleToggle={handleToggle}
        getSerchFilm={getSerchFilm}


      />
      <MoviesCardList
        films={searchFilms}
      />
    </>
  )
}

export default Movies;