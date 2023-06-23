import './HeaderRegister.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function HeaderRegister({ welcome }) {
  return (
    <div className='header-register'>
      <Link to='/'>
        <img className='header-register__logo' src={logo} alt='логотип' />
      </Link>
      <h2 className='header-register__welcome'>{welcome}</h2>
    </div>
  )
}

export default HeaderRegister;