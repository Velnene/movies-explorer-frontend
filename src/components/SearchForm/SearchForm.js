import './SearchForm.css'

function SearchForm({ isOn, handleToggle }) {
  return (
    <div className='search-form'>
      <form className='search-form__item'>
        <input className='search-form__input' type='text' placeholder='Фильм' required></input>
        <button className='search-form__button'></button>
      </form>
      <div className='search-form__switch'>
        <input onChange={handleToggle} className="search-form__switch-checkbox" id={`search-form__switch-new`} type="checkbox" />
        <label style={{ background: isOn && 'white' }} className="search-form__switch-label" htmlFor={`search-form__switch-new`}>
          <span className='search-form__switch-button'></span>
          <p className='search-form__text'>Короткометражки</p>
        </label>
      </div>
      <div className='search-form__stroke'></div>
    </div>
  )
}

export default SearchForm;