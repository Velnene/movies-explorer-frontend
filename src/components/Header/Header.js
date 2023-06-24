import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Header({ loggedIn, handleOpenBurger }) {

  return (
    loggedIn ?
      <header className='header'>
        <Link to='/'>
          <img className="header__logo" src={logo} alt='логотип' />
        </Link>
        <div className='header__navigation'>
          <Link className='header__navigation-button' to='/movies'>Фильмы</Link>
          <Link className='header__navigation-button' to='/saved-movies'>Сохранённые фильмы</Link>
        </div>
        <Link className='header__profile' to='/profile'>Аккаунт</Link>
        <button onClick={handleOpenBurger} className='header__burger'></button>
      </header>
      :
      <header className='header'>
        <Link to='/'>
          <img className="header__logo" src={logo} alt='логотип' />
        </Link>
        <div className='header__auth'>
          <Link className='header__registration' to='signup'>Регистрация</Link>
          <Link className='header__login' to='signin'>Войти</Link>
        </div>
      </header>
  );
}

export default Header;
