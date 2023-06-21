import './Register.css'
import HeaderRegister from '../HeaderRegister/HeaderRegister';

function Register() {
  return (
    <section className='register'>
      <HeaderRegister
        welcome={"Добро пожаловать!"}
      />
      <form className='register__form'>
        <label className='register__lable'>Имя
          <input defaultValue='Виталий' type='text' className='register__input' required minLength="2" maxLength='40'></input>
          <span></span>
        </label>
        <label className='register__lable'>E-mail
          <input defaultValue='pochta@yandex.ru' type='email' className='register__input' required minLength="2" maxLength='40'></input>
        </label>
        <label className='register__lable'>Пароль
          <input defaultValue='12345678901234' className='register__input register__input-error' type='password' required minLength='8' maxLength='40'></input>
          <span className='register__error'>Что-то пошло не так...</span>
        </label>
        <button className='register__button'>Зарегистрироваться</button>
      </form>
      <span className='register__enter'>Уже зарегистрированы?
        <a href='/signup' className='register__enter-link'>Войти</a>
      </span>
    </section>
  )
}

export default Register;