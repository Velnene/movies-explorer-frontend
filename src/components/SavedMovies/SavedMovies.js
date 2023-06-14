import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react'
import api from '../../utils/api';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ isOn, handleToggle }) {
  const deleteCardIcon = true;
  const [films, getFilms] = useState([]);

  useEffect(() => {
    api.getFilm()
      .then((res) => {
        getFilms(res.films.slice(17));
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