import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Context } from '../../context/CurrentUserContext';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Main from '../Main/Main';
import Preloader from '../Preloader/Preloader';
import apiMain from '../../utils/MainApi';
import api from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate();
  const [preloader, setPreloader] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setUserInfo] = useState({});
  const [burger, openBurger] = useState(false);
  const [nameProfile, setNameProfile] = useState('');
  //movies const
  const [moreButton, setMoreButton] = useState(false);
  const [films, getFilms] = useState([]);
  const [searchFilms, getSearchFilms] = useState([]);
  const [next, setNext] = useState(0);
  const [saveFilms, getSaveFilms] = useState([]);
  const [isComponentSaveFilms, getIsComponentSaveFilms] = useState(false);

  const filmsPerPageForBigWidth = 3;
  const filmsPerPageForSmalWidth = 2;
  let arrayForHoldingFilms = [];

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    else {
      apiMain.getSign(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setNameProfile(res.name);
            navigate('/movies', { replace: true });
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (loggedIn) {
      apiMain.getUserInfo(jwt)
        .then((res) => {
          setNameProfile(res.name);
          setUserInfo(res);
        }).catch((err) => {
          alert(err);
        });
    }
  }, [loggedIn])

  // Movies
  useEffect(() => {
    api.getFilm()
      .then((res) => {
        setPreloader(true)
        localStorage.setItem('arrayFilms', JSON.stringify(res))
        let allFilms = res;
        getFilms(allFilms);
      }).catch((err) => {
        alert(err.message);
      }).finally(() => {
        setPreloader(false)
      })
  }, [])

  // Save movies
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    apiMain.getSavedFilm(jwt)
      .then((res) => {
        setPreloader(true)
        let allFilms = res;
        getSaveFilms(allFilms);
      }).catch((err) => {
        alert(err)
      }).finally(() => {
        setPreloader(false)
      })
  }, []);

  //Movies
  function handleSerchFilm(word) {
    if (word === '') {
      return
    }
    localStorage.setItem('shortFilms', isOn)
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
    let findFilms = !isComponentSaveFilms ?
      films.filter(element => element.nameRU.match(word)) :
      saveFilms.filter(element => element.nameRU.match(word));
    let movies = !isOn ? findFilms
      : findFilms.filter(element => {
        if (element.duration > 40) return element;
      });
    const slicedFilms = movies.slice(start, end);
    arrayForHoldingFilms = [...arrayForHoldingFilms, ...slicedFilms];
    getSearchFilms(arrayForHoldingFilms);
    setNext(end);
    setMoreButton(arrayForHoldingFilms.length < movies.length);
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

  //Burger
  function handleOpenBurger() {
    openBurger(true)
  }

  function closeBurger() {
    openBurger(false)
  }

  function handleRegister(name, email, password) {
    if (!password || !email || !name) {
      return;
    }
    apiMain.signUp(name, email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        navigate('/signin');
      })
      .catch((res) => {
        alert('5');
        console.log(res)
      })
  }

  function handleLogin(email, password) {
    if (!password || !email) {
      return;
    }
    apiMain.signIn(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token)
        navigate('/movies');
        setLoggedIn(true);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleUpdateUser(name, email) {
    const jwt = localStorage.getItem('jwt');
    apiMain.changeUserInfo({ name: name, email: email }, jwt).then((res) => {
      setUserInfo(res);
      navigate('/movies')
    }).catch((err) => {
      alert(err);
    });
  }

  function exitProfile() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/signin');
  }

  // Короткометражки
  function includeShortFilms() {
    setIsOn(!isOn);
    localStorage.setItem('shortFilms', isOn)
  }

  // Переход по страницам 
  function goToThePageSavedMovies() {
    getSearchFilms([]);
    getIsComponentSaveFilms(true);
  }
  function goToThePageMovies() {
    getSearchFilms([]);
    getIsComponentSaveFilms(false);
  }

  return (
    <Context.Provider value={currentUser} >
      <div className='app'>
        <Routes>
          <Route path='/' element={<>
            <Preloader
              preloader={preloader}>
              <Header
                loggedIn={loggedIn} />
              <Main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
              </Main>
              <Footer />
            </Preloader>
          </>} />
          <Route path='/movies' element={<>
            <Preloader
              preloader={preloader}>
              <Header
                goToThePageSavedMovies={goToThePageSavedMovies}
                goToThePageMovies={goToThePageMovies}
                handleOpenBurger={handleOpenBurger}
                loggedIn={loggedIn} />
              <Main>
                <Movies
                  handleShowMorePosts={handleShowMorePosts}
                  getSerchFilm={handleSerchFilm}
                  searchFilms={searchFilms}
                  moreButton={moreButton}
                  isOn={isOn}
                  handleToggle={includeShortFilms}
                />
              </Main>
              <Footer />
            </Preloader>
          </>} />
          <Route
            path='/saved-movies'
            element={<>
              <Preloader
                preloader={preloader}>
                <Header
                  goToThePageSavedMovies={goToThePageSavedMovies}
                  goToThePageMovies={goToThePageMovies}
                  handleOpenBurger={handleOpenBurger}
                  loggedIn={loggedIn} />
                <Main>
                  <SavedMovies
                    getSerchFilm={handleSerchFilm}
                    searchFilms={searchFilms}
                    moreButton={moreButton}
                    handleShowMorePosts={handleShowMorePosts}
                    isOn={isOn}
                    getSearchFilms={getSearchFilms}
                    handleToggle={includeShortFilms}
                  />
                </Main>
                <Footer />
              </Preloader>
            </>} />
          <Route path='/profile' element={<>
            <Header
              loggedIn={loggedIn} />
            <Main>
              <Profile
                currentUser={currentUser}
                nameProfile={nameProfile}
                changeProfile={handleUpdateUser}
                exitProfile={exitProfile}
              />
            </Main>
          </>} />
          <Route path='/signup' element={<>
            <Main>
              <Register
                onRegister={handleRegister}
              />
            </Main>
          </>} />
          <Route path='/signin' element={<>
            <Main>
              <Login
                onLogin={handleLogin}
              />
            </Main>
          </>} />
          <Route path='*' element={<>
            <Main>
              <Error />
            </Main>
          </>} />
        </Routes>
        <BurgerMenu
          closeBurger={closeBurger}
          burger={burger} />
      </div>
    </Context.Provider >
  );
}

export default App;