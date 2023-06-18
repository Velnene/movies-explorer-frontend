import './BurgerMenu.css';
import closeImage from '../../images/burger-menu-button-close.svg';

function BurgerMenu({ burger }) {
  return (
    <section className={`burger-menu ${burger && `burger-menu__open`}`}>
      <div className='burger-menu__container'>
        <button className='burger-menu__button-close'>
          <img className='burger-menu__image-close' src={closeImage} alt='close'>
          </img>
        </button>
        <h3 className='burger-menu__subtitle'>Главная</h3>
        <ul className='burger-menu__links'>
          <li className='burger-menu__link burger-menu__link_active'>Фильмы</li>
          <li className='burger-menu__link'>Сохранённые фильмы</li>
        </ul>
        <button className='burger-menu__profile'>Аккаунт</button>
      </div>
    </section>
  )
}

export default BurgerMenu;