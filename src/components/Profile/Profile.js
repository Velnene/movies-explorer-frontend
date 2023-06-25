import './Profile.css'
import { useState } from 'react';

function Profile(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }
  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleChacgeInfo(e) {
    e.preventDefault();
    props.changeProfile(name, email)
  }

  return (
    <section className='profile'>
      <h2 className='profile__welcome'>Привет, {props.nameProfile}!</h2>
      <form className='profile__form' onSubmit={handleChacgeInfo}>
        <label className='profile__label'>Имя
          <input value={name} onChange={handleSetName} placeholder={props.currentUser.name} className='profile__input-name' required></input>
        </label>
        <label className='profile__label'>E-mail
          <input value={email} onChange={handleSetEmail} placeholder={props.currentUser.email} className='profile__input-email' required></input>
        </label>
        <button className='profile__input-button'>Редактировать</button>
      </form>
      <button className='profile__exit'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;