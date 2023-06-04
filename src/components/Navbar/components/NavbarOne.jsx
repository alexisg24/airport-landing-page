import { GiAirplaneDeparture } from 'react-icons/gi'
import { RiEarthLine } from 'react-icons/ri'
import { FaHandshake } from 'react-icons/fa'
const NavbarOne = () => {
  return (
    <div className='navBarOne flex'>
      <div>
        <GiAirplaneDeparture className='icon' />
      </div>

      <div className='none flex'>
        <li className='flex'><RiEarthLine className='icon' />
          <a href='https://aeropuertosdefalcon.com/' target='_blank' rel='noreferrer'>
            Página Principal
          </a>
        </li>
        <li className='flex'><FaHandshake className='icon' />
          <a href='https://aeropuertosdefalcon.com/institucion/' target='_blank' rel='noreferrer'>
            Valores
          </a>
        </li>
      </div>
      <div className='atb flex'>
        {/* <span>
          Text
        </span> */}
      </div>
    </div>
  )
}

export { NavbarOne }
