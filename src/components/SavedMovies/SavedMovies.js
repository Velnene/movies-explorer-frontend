import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import api from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ isOn, handleToggle }) {
  const deleteCardIcon = true;
  const [films, getFilms] = useState([]);

  useEffect(() => {
    api.getFilm()
      .then((res) => {
        let allFilms = res?.films;
        if (window.matchMedia("(max-width: 600px)").matches) {
          getFilms(allFilms.slice(18));
        }
        else if (window.matchMedia("(max-width: 1500px)").matches) {
          getFilms(allFilms.slice(17));
        }
      }).catch((err) => {
        alert(err);
      });
  }, [])

  return (
    <section>
      <SearchForm
        isOn={isOn}
        handleToggle={handleToggle}
      />
      {<MoviesCardList
        deleteCardIcon={deleteCardIcon}
        films={films}
      />}
    </section>
  )
}

export default SavedMovies;