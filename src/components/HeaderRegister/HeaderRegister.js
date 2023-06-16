import './HeaderRegister.css';
import logo from '../../images/logo.svg'

function HeaderRegister({ welcome }) {
  return (
    <header className='header-register'>
      <img className='header-register__logo' src={logo} alt='логотип' />
      <h2 className='header-register__welcome'>{welcome}</h2>
    </header>
  )
}

export default HeaderRegister;