import './Error.css'
import { Link, useNavigate } from 'react-router-dom';

function Error() {
  const history = useNavigate();
  function handleClick() {
    history(-1);
  }
  return (
    <section className='error'>
      <h3 className='error__status'>404</h3>
      <span className='error__message'>Страница не найдена</span>
      <Link className='error__button-back' onClick={handleClick}>Назад</Link>
    </section>)
}

export default Error;