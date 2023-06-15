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

function App() {
  const [value, setValue] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setUserInfo] = useState({});

  return (
    <Context.Provider value={currentUser} >
      <div className='app'>
        <Routes>
          <Route path='/' element={<>
            <Header
              loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </>} />
          <Route path='/movies' element={<>
            <Header
              loggedIn={loggedIn} />
            <Movies
              isOn={value}
              handleToggle={() => setValue(!value)}
            />
            <Footer />
          </>} />
          <Route path='/saved-movies' element={<>
            <Header
              loggedIn={loggedIn} />
            <SavedMovies
              isOn={value}
              handleToggle={() => setValue(!value)}
            />
            <Footer />
          </>} />
          <Route path='/profile' element={<>
            <Header
              loggedIn={loggedIn} />
            <Profile />
          </>} />
          <Route path='/signin' element={<>
            <Register />
          </>} />
          <Route path='/signup' element={<>
            <Login />
          </>} />
          <Route path='*' element={
            <>
              <Error />
            </>
          } />
        </Routes>
      </div>
    </Context.Provider >
  );
}

export default App;