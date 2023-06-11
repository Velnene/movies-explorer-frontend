import './AboutMe.css'
import photo from '../../images/pic__photo.png'
function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__text-info'>
          <h3 className='about-me__my-name'>Виталий</h3>
          <p className='about-me__info-title'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__subtitle'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <p className='about-me__my-network'>Github</p>
        </div>
        <img className='about-me__info-image' src={photo}></img>
      </div>
    </div>
  )
}

export default AboutMe;
