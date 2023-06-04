import { useState } from 'react'

export const useNavbar = () => {
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

  return { active, showNavBar, removeNavBar, addBgColor, bg }
}
