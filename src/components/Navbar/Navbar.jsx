import { useState } from 'react'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import logo from '../../assets/logo.png'
const NavBar = () => {
  const [active, setActive] = useState('navBarMenu')
  const showNavBar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () => {
    setActive('navBarMenu')
  }

  const [bg, setBg] = useState('navBarTwo')
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      setBg('navBarTwo navbar_With_Bg')
    } else {
      setBg('navBarTwo')
    }
  }

  window.addEventListener('scroll', addBgColor)

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul className='icon' />
        </div>

        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon' /> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon' />  Languages</li>
        </div>
        <div className='atb flex'>
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={bg}>
        <div className='logoDiv'>
          <img src={logo} className='Logo' />
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li className='listItem' onClick={removeNavBar}>Home</li>
            <li className='listItem' onClick={removeNavBar}>About</li>
            <li className='listItem' onClick={removeNavBar}>Offers</li>
            <li className='listItem' onClick={removeNavBar}>Seats</li>
            <li className='listItem' onClick={removeNavBar}>Destinations</li>
          </ul>

          <button className='btn flex btnOne' onClick={removeNavBar}>Contact</button>
        </div>
        <button className='btn flex btnTwo'>Contact</button>
        <div onClick={showNavBar} className='toggleIcon'><CgMenuGridO className='icon' /></div>
      </div>
    </div>
  )
}

export { NavBar }