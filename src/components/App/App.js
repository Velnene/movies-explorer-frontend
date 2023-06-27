import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { Context } from '../../context/CurrentUserContext';
import { useNavigate } from 'react-router-dom';


import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Main from '../Main/Main';
import apiMain from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  const [value, setValue] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setUserInfo] = useState({});
  const [burger, openBurger] = useState(false);
  const [nameProfile, setNameProfile] = useState('');

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
        // setPopupAuthorization(true)
        // setSuccessful({ image: Successful, message: 'Вы успешно зарегистрировались!' })
      })
      .catch((res) => {
        alert(res);
        // setPopupAuthorization(true)
        // setSuccessful({
        //   image: Mistake, message: 'Что-то пошло не так! Попробуйте ещё раз.'
        // })
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
        // setPopupAuthorization(true)
        // setSuccessful({
        //   image: Mistake, message: 'Что-то пошло не так! Попробуйте ещё раз.'
        // })
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

  return (
    <Context.Provider value={currentUser} >
      <div className='app'>
        <Routes>
          <Route path='/' element={<>
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
          </>} />
          <Route path='/movies' element={<>
            <Header
              handleOpenBurger={handleOpenBurger}
              loggedIn={loggedIn} />
            <Main>
              <Movies
                isOn={value}
                handleToggle={() => setValue(!value)}
              />
            </Main>
            <Footer />
          </>} />
          <Route path='/saved-movies' element={<>
            <Header
              handleOpenBurger={handleOpenBurger}
              loggedIn={loggedIn} />
            <Main>
              <SavedMovies
                isOn={value}
                handleToggle={() => setValue(!value)}
              />
            </Main>
            <Footer />
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