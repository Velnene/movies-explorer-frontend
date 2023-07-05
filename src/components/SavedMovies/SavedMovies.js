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
  const [moreButton, setMoreButton] = useState(false);
  const [next, setNext] = useState(0);
  const filmsPerPageForBigWidth = 3;
  const filmsPerPageForSmalWidth = 2;
  let arrayForHoldingFilms = [];

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    apiMain.getSavedFilm(jwt)
      .then((res) => {
        let allFilms = res;
        getFilms(allFilms);
      }).catch((err) => {
        alert(err);
      });
  }, []);

  function getSerchFilm(word) {
    if (word === '') {
      return
    }
    localStorage.setItem('searchWord', word);
    if (window.matchMedia("(max-width: 600px)").matches) {
      showTheNumberOfFilms(0, 5)
    }
    else if (window.matchMedia("(max-width: 800px)").matches) {
      showTheNumberOfFilms(0, 8)
    }
    else if (window.matchMedia("(max-width: 1400px)").matches) {
      showTheNumberOfFilms(0, 12)
    }
  }

  function showTheNumberOfFilms(start, end) {
    let word = localStorage.getItem('searchWord');
    const findFilms = films.filter(element => element.nameRU.match(word))
    const slicedFilms = findFilms.slice(start, end);
    arrayForHoldingFilms = [...arrayForHoldingFilms, ...slicedFilms];
    console.log(arrayForHoldingFilms)
    getSearchFilms(arrayForHoldingFilms);
    setNext(end);
    setMoreButton(arrayForHoldingFilms.length < findFilms.length);
  }

  const handleShowMorePosts = () => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      showTheNumberOfFilms(0, next + filmsPerPageForSmalWidth);
      setNext(next + filmsPerPageForSmalWidth);
    } else if (window.matchMedia("(max-width: 1400px)").matches) {
      showTheNumberOfFilms(0, next + filmsPerPageForBigWidth);
      setNext(next + filmsPerPageForBigWidth);
    }
  };

  return (
    <section>
      <SearchForm
        isOn={isOn}
        handleToggle={handleToggle}
        getSerchFilm={getSerchFilm}
      />
      {<MoviesCardList
        moreButton={moreButton}
        handleShowMorePosts={handleShowMorePosts}
        isSerchfilms={isSerchfilms}
        deleteCardIcon={deleteCardIcon}
        films={searchFilms}
        getSearchFilms={getSearchFilms}
      />}
    </section>
  )
}

export default SavedMovies;