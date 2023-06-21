import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import api from '../../utils/api';

function Movies({ isOn, handleToggle }) {

  const [films, getFilms] = useState([]);

  useEffect(() => {
    api.getFilm()
      .then((res) => {
        if (window.matchMedia("(max-width: 600px)").matches) {
          getFilms(res.films.slice(15));
        }
        else if (window.matchMedia("(max-width: 800px)").matches) {
          getFilms(res.films.slice(12));
        }
        else if (window.matchMedia("(max-width: 1400px)").matches) {
          getFilms(res.films.slice(8));
        }
        else {
          getFilms(res.films);
        }
      }).catch((err) => {
        alert(err);
      });
  }, [films])


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