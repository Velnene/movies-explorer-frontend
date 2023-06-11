import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__info'>
        <p className='footer__year'>&#169; 2023</p>
        <div className='footer__links'>
          <a className='footer__link' href="https://practicum.yandex.ru">Яндекс.Практикум</a>
          <a className='footer__link' href="https://github.com/Velnene">Github</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
