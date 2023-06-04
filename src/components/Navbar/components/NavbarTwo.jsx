import { useNavbar } from '../../../hook/useNavbar'
import { CgMenuGridO } from 'react-icons/cg'
import logo from '../../../assets/logo.png'
import { NavbarItems } from './NavbarItems'
const NavbarTwo = () => {
  const { active, showNavBar, removeNavBar, addBgColor, bg } = useNavbar()
  window.addEventListener('scroll', addBgColor)
  const redirect = () => { window.location.href = '#footer' }
  return (
    <div className={bg}>
      <div className='logoDiv'>
        <img src={logo} className='Logo' />
      </div>
      <div className={active}>
        <NavbarItems removeNavBar={removeNavBar} />
      </div>
      <button className='btn flex btnTwo' onClick={redirect}>Contacto</button>
      <div onClick={showNavBar} className='toggleIcon'><CgMenuGridO className='icon' /></div>
    </div>
  )
}

export { NavbarTwo }
