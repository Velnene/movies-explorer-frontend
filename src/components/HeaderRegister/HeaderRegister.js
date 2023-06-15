import './HeaderRegister.css';
import logo from '../../images/logo.svg'

function HeaderRegister({ welcome }) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='логотип' />
      <h2 className='header__welcome'>{welcome}</h2>
    </header>
  )
}

export default HeaderRegister;