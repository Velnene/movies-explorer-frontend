import './Register.css'
import HeaderRegister from '../HeaderRegister/HeaderRegister';
import { useState } from 'react';

function Register(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }
  function handleSetPassword(e) {
    setPassword(e.target.value);
  }
  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleRegister(e) {
    e.preventDefault();
    props.onRegister(name, email, password)
  }

  return (
    <section className='register'>
      <HeaderRegister
        welcome={"Добро пожаловать!"}
      />
      <form className='register__form' onSubmit={handleRegister}>
        <label value={name} onChange={handleSetName} className='register__lable'>Имя
          <input defaultValue='' type='text' className='register__input' required minLength="2" maxLength='40'></input>
          <span></span>
        </label>
        <label className='register__lable'>E-mail
          <input value={email} onChange={handleSetEmail} defaultValue='' type='email' className='register__input' required minLength="2" maxLength='40'></input>
        </label>
        <label className='register__lable'>Пароль
          <input value={password} onChange={handleSetPassword} defaultValue='' className='register__input register__input-error' type='password' required minLength='8' maxLength='40'></input>
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