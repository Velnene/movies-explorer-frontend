import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Header from '../Header/Header';

function App() {

  const navigate = useNavigate();


  return (<Context.Provider >
    <div className='app'>
      <div className='app__container'>
        <Routes>
          <Route path='/' element={<>
            <Header />
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