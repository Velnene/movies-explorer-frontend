import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../context/CurrentUserContext';
import Main from '../Main/Main';

function App() {

  const navigate = useNavigate();


  return (<Context.Provider >
    <Routes>
      <Route path='/' element={<>
        <Main />
      </>} />
      <Route path='/movies' element={<></>} />
      <Route path='/saved-movies' element={<></>} />
      <Route path='/profile' element={<></>} />
      <Route path='/signin' element={<></>} />
      <Route path='/signup' element={<></>} />
    </Routes>
  </Context.Provider >
  );
}

export default App;