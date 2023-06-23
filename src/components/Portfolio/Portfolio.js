import './Portfolio.css'
import link from '../../images/svg__link.svg'

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__items'>
        <li className='portfolio__item'><a className='portfolio__link' rel='noreferrer' target="_blank" href='https://github.com/Velnene/how-to-learn'>Статичный сайт<img className='portfolio__link-image' src={link} alt='ссылка на статически сайт'></img></a></li>
        <li className='portfolio__item'><a className='portfolio__link' rel='noreferrer' target="_blank" href='https://github.com/Velnene/russian-travel'>Адаптивный сайт<img className='portfolio__link-image' src={link} alt='ссылка на адаптивный сайт'></img></a></li>
        <li className='portfolio__item'><a className='portfolio__link' rel='noreferrer' target="_blank" href='https://github.com/Velnene/react-mesto-api-full-gha'>Одностраничное приложение<img className='portfolio__link-image' src={link} alt='ссылка'></img></a></li>
      </ul>
    </div>
  )
}

export default Portfolio;