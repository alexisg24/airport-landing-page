import { NavbarTwo } from './components/NavbarTwo'
import { NavbarOne } from './components/navBarOne'

const NavBar = () => {
  return (
    <div className='navBar flex'>
      <NavbarOne />
      <NavbarTwo />
    </div>
  )
}

export { NavBar }
