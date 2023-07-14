import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__info'>
        <p className='footer__year'>&#169; 2023</p>
        <div className='footer__links'>
          <a className='footer__link' rel='noreferrer' target="_blank" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
          <a className='footer__link' rel='noreferrer' target="_blank" href="https://github.com/Velnene">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
