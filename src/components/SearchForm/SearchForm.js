import { toBeValid } from '@testing-library/jest-dom/matchers';
import './SearchForm.css'
import { useState } from 'react';


function SearchForm({ isOn, handleToggle, getSerchFilm }) {
  const [value, getValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    getSerchFilm(value)
  }

  function handleChangeInput(e) {
    getValue(e.target.value)
  }

  return (
    <div className='search-form'>
      <form className='search-form__item' onSubmit={handleSubmit}>
        <input className='search-form__input' onChange={handleChangeInput} value={value} type='text' placeholder='Фильм' required></input>
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