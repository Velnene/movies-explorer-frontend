import './Profile.css'

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__welcome'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <label className='profile__label'>Имя
          <input placeholder='Виталий' className='profile__input-name'></input>
        </label>
        <label className='profile__label'>E-mail
          <input placeholder='pochta@yandex.ru' className='profile__input-email'></input>
        </label>
        <button className='profile__input-button'>Редактировать</button>
      </form>
      <button className='profile__exit'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;