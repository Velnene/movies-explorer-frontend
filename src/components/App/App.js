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
            <Main>
              <Header
                loggedIn={false} />
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
              <Footer />
            </Main>
          </>} />
          <Route path='/movies' element={<>
            <Main>
              <Header
                handleOpenBurger={handleOpenBurger}
                loggedIn={true} />
              <Movies
                isOn={value}
                handleToggle={() => setValue(!value)}
              />
              <Footer />
            </Main>
          </>} />
          <Route path='/saved-movies' element={<>
            <Main>
              <Header
                handleOpenBurger={handleOpenBurger}
                loggedIn={true} />
              <SavedMovies
                isOn={value}
                handleToggle={() => setValue(!value)}
              />
              <Footer />
            </Main>
          </>} />
          <Route path='/profile' element={<>
            <Main>
              <Header
                loggedIn={true} />
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