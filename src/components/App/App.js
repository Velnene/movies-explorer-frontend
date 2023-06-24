import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import { Context } from '../../context/CurrentUserContext';

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

function App() {
  const [value, setValue] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setUserInfo] = useState({});
  const [burger, openBurger] = useState(false);

  function handleOpenBurger() {
    openBurger(true)
  }

  function closeBurger() {
    openBurger(false)
  }

  return (
    <Context.Provider value={currentUser} >
      <div className='app'>
        <Routes>
          <Route path='/' element={<>
            <Header
              loggedIn={false} />
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
              loggedIn={true} />
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
              loggedIn={true} />
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
              loggedIn={true} />
            <Main>
              <Profile />
            </Main>
          </>} />
          <Route path='/signin' element={<>
            <Main>
              <Register />
            </Main>
          </>} />
          <Route path='/signup' element={<>
            <Main>
              <Login />
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