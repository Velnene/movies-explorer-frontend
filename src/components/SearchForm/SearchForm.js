import './SearchForm.css'

function SearchForm({ isOn, handleToggle }) {
  return (
    <div className='search-form'>
      <form className='search-form__item'>
        <input className='search-form__input' type='text' placeholder='Фильм'></input>
        <button className='search-form__button'></button>
        <input onChange={handleToggle} className="search-form__switch-checkbox" id={`search-form__switch-new`} type="checkbox" />
        <label style={{ background: !isOn && 'white' }} className="search-form__switch-label" htmlFor={`search-form__switch-new`}>
          <span className='search-form__switch-button'></span>
          <span className='search-form__text'>Короткометражки</span>
        </label>
      </form>
      <div className='search-form__stroke'></div>
    </div>
  )
}

export default SearchForm;