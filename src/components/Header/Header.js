import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Header({ loggedIn, handleOpenBurger }) {
  

  return (
    loggedIn ?
      <header className='header'>
        <img className="header__logo" src={logo} alt='логотип' />
        <div className='header__navigation'>
          <Link className='header__navigation-button'>Фильмы</Link>
          <Link className='header__navigation-button'>Сохранённые фильмы</Link>
        </div>
        <div className='header__profile'>Аккаунт</div>
        <button onClick={handleOpenBurger} className='header__burger'></button>
      </header>
      :
      <header className='header'>
        <img className="header__logo" src={logo} alt='логотип' />
        <div>
          <button className='header__registration'>Регистрация</button>
          <button className='header__login'>Войти</button>
        </div>
      </header>
  );
}

export default Header;
