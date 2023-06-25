import './Login.css'
import HeaderRegister from '../HeaderRegister/HeaderRegister';
import { useState } from 'react';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }
  function handleSetPassword(e) {
    setPassword(e.target.value);
  }
  function handleLogin(e) {
    e.preventDefault();
    props.onLogin(email, password)
  }

  return (
    <section className='login'>
      <HeaderRegister
        welcome={'Рады видеть!'}
      />
      <form className='login__form' onSubmit={handleLogin}>
        <label className='login__lable'>E-mail
          <input value={email} onChange={handleSetEmail} defaultValue='pochta@yandex.ru' type='email' className='login__input' required minLength="2" maxLength='40'></input>
        </label>
        <label className='login__lable'>Пароль
          <input value={password} onChange={handleSetPassword} defaultValue='' className='login__input' type='password' required minLength='8' maxLength='40'></input>
        </label>
        <button className='login__button'>Войти</button>
      </form>
      <span className='login__enter'>Ещё не зарегистрированы?
        <a href='/signin' className='login__enter-link'>Регистрация</a>
      </span>
    </section>
  )
}

export default Login;