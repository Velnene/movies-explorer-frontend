import './AboutProject.css'

function AboutProject() {
  return (
    <div className='about-project'>
      <h2 className='about-project__text'>О проекте</h2>
      <ul className='about-project__info'>
        <li className='about-project__info-item'>Дипломный проект включал 5 этапов</li>
        <li className='about-project__info-item'>На выполнение диплома ушло 5 недель</li>
        <li className='about-project__info-item'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
        <li className='about-project__info-item'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
      </ul>
      <div className='about-project__timing'>
        <span className='about-project__timing-item'>1 неделя</span>
        <span className='about-project__timing-item'>4 недели</span>
      </div>
    </div>
  )
}
export default AboutProject;
