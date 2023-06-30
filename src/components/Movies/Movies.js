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
        if (window.matchMedia("(max-width: 600px)").matches) {
          getFilms(allFilms);
        }
        else if (window.matchMedia("(max-width: 800px)").matches) {
          getFilms(allFilms);
        }
        else if (window.matchMedia("(max-width: 1400px)").matches) {
          getFilms(allFilms);
        }
        else {
          getFilms(allFilms);
        }
      }).catch((err) => {
        alert(err.message);
      });
  }, [])

  function getSerchFilm(word) {
    if (word === '') {
      return
    }
    getSearchFilms(films.filter(element => element.nameRU.match(word)))
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