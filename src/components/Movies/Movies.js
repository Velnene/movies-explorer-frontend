import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import api from '../../utils/api';

function Movies({ isOn, handleToggle }) {

  const [films, getFilms] = useState([]);

  useEffect(() => {
    api.getFilm()
      .then((res) => {
        if (window.matchMedia('(max-width: 880pxpx)'))
          getFilms(res.films.slice(12));
        else {
          getFilms(res.films.slice(5));
        }
      }).catch((err) => {
        alert(err);
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