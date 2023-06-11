import './Portfolio.css'
import link from '../../images/svg__link.svg'
function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__items'>
        <li className='portfolio__item'><a className='portfolio__link' href='https://github.com/Velnene/how-to-learn'>Статичный сайт</a><img className='portfolio__link-image' src={link}></img></li>
        <li className='portfolio__item'><a className='portfolio__link' href='https://github.com/Velnene/russian-travel'>Адаптивный сайт</a><img className='portfolio__link-image' src={link}></img></li>
        <li className='portfolio__item'><a className='portfolio__link' href='https://github.com/Velnene/react-mesto-api-full-gha'>Одностраничное приложение</a><img className='portfolio__link-image' src={link}></img></li>
      </ul>
    </div>
  )
}

export default Portfolio;