import './Login.css'
import HeaderRegister from '../HeaderRegister/HeaderRegister';

function Login() { 
  return (
    <section className='login'>
      <HeaderRegister
        welcome={'Рады видеть!'}
      />
      <form className='login__form'>
        <label className='login__lable'>E-mail
          <input defaultValue='pochta@yandex.ru' type='email' className='login__input' required minLength="2" maxLength='40'></input>
        </label>
        <label className='login__lable'>Пароль
          <input defaultValue='12345678901234' className='login__input' type='password' required minlength='8' maxLength='40'></input>
        </label>
        <button className='login__button'>Зарегистрироваться</button>
      </form>
      <span className='login__enter'>Уже зарегистрированы?
        <a href='/signup' className='login__enter-link'>Войти</a>
      </span>
    </section>
  )
}

export default Login;