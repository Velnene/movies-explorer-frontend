import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import api from '../../utils/api';

function Movies({ isOn, handleToggle }) {

  const [films, getFilms] = useState([]);
//После перезагрузки страницы, меняется кол-во карточек
  useEffect(() => {
    api.getFilm()
      .then((res) => {
        let allFilms = res?.films;
        if (window.matchMedia("(max-width: 600px)").matches) {
          getFilms(allFilms.slice(15));
        }
        else if (window.matchMedia("(max-width: 800px)").matches) {
          getFilms(allFilms.slice(12));
        }
        else if (window.matchMedia("(max-width: 1400px)").matches) {
          getFilms(allFilms.slice(8));
        }
        else {
          getFilms(allFilms);
        }
      }).catch((err) => {
        alert(err.message);
      });
  }, [])


  return (
    <>
      <SearchForm
        isOn={isOn}
        handleToggle={handleToggle} />
      <MoviesCardList
        films={films}
      />
    </>
  )
}
export default Movies;