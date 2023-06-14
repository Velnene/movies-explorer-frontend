import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import { Context } from '../../context/CurrentUserContext';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [value, setValue] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (<Context.Provider >
    <div className='app'>
      <Header
        loggedIn={loggedIn} />
      <Routes>
        <Route path='/' element={<>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Main />
        </>} />
        <Route path='/movies' element={<>
          <Movies
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
        </>} />
        <Route path='/saved-movies' element={<>
          <SavedMovies
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
        </>} />
        <Route path='/profile' element={<></>} />
        <Route path='/signin' element={<></>} />
        <Route path='/signup' element={<></>} />
      </Routes>
      <Footer />
    </div>
  </Context.Provider >
  );
}

export default App;