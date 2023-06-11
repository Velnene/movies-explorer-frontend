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

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (<Context.Provider >
    <div className='app'>
      <div className='app__container'>
        <Routes>
          <Route path='/' element={<>
            <Header
              loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer/>
            <Main />
          </>} />
          <Route path='/movies' element={<></>} />
          <Route path='/saved-movies' element={<></>} />
          <Route path='/profile' element={<></>} />
          <Route path='/signin' element={<></>} />
          <Route path='/signup' element={<></>} />
        </Routes>
      </div>
    </div>
  </Context.Provider >
  );
}

export default App;