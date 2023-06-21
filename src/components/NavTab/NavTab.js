import './NavTab.css';

function NavTab() {
  return (
    <nav>
      <ul className="nave-tab">
        <li className='nave-tab__item'><a className='nav-tab__link' href="#about-project">О проекте</a></li>
        <li className='nave-tab__item'><a className='nav-tab__link' href="#tech">Технологии</a></li>
        <li className='nave-tab__item'><a className='nav-tab__link' href="#student">Студент</a></li>
      </ul>
    </nav>
  )
}
export default NavTab