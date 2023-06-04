import { useEffect } from 'react'
import logoGob from '../../assets/gob-logo.png'
import logoFalcon from '../../assets/logoFalcon.png'
import logoAIJC from '../../assets/logoAIJC.png'
import { AiOutlineTwitter, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'
import Aos from 'aos'
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='footer' id='footer'>
      <div className='sectionContainer container grid'>
        <div className='gridOne' data-aos='fade-up' data-aos-duration='2500'>
          <div className='logoDiv'>
            <img src={logoGob} />
          </div>
          <div className='logoDiv'>
            <img src={logoFalcon} className='Logo' />
            <img src={logoAIJC} className='Logo' />
          </div>
          <p>Instituto Autónomo de Aeropuertos del Estado Falcón.</p>
          <div className='socialIcon flex'>
            <a href='https://www.instagram.com/aeropuertosdefalcon' target='_blank' rel='noreferrer'><AiFillInstagram className='icon' /></a>
            <a href='https://twitter.com/iaefalcon' target='_blank' rel='noreferrer'><AiOutlineTwitter className='icon' /></a>
            <a href='https://aeropuertosdefalcon.com' target='_blank' rel='noreferrer'><TbWorldWww className='icon' /></a>
          </div>
        </div>

        <div className='footerLinks' data-aos='fade-up' data-aos-duration='2500'>
          <span className='linkTitle'>Información</span>
          <li>
            <a href='https://aeropuertosdefalcon.com' target='_blank' rel='noreferrer'>Inicio</a>
          </li>
          <li>
            <a href='https://aeropuertosdefalcon.com/institucion/' target='_blank' rel='noreferrer'>Institución</a>
          </li>
          <li>
            <a href='https://aeropuertosdefalcon.com/aerolineas/' target='_blank' rel='noreferrer'>Aerolíneas</a>
          </li>
          <li>
            <a href='https://aeropuertosdefalcon.com/itinerarios/' target='_blank' rel='noreferrer'>Itinerarios</a>
          </li>
          <li>
            <a href='https://aeropuertosdefalcon.com/turismo/' target='_blank' rel='noreferrer'>Turismo</a>
          </li>
          <li>
            <a href='https://aeropuertosdefalcon.com/galeria/' target='_blank' rel='noreferrer'>Galería</a>
          </li>
        </div>

        {/* <div className='footerLinks' data-aos='fade-up' data-aos-duration='2500'>
          <span className='linkTitle'>Information</span>
          <li>
            <a href=''>Chauffer</a>
          </li>
          <li>
            <a href=''>Our Patterns</a>
          </li>
          <li>
            <a href=''>Destination</a>
          </li>
          <li>
            <a href=''>Careers</a>
          </li>
          <li>
            <a href=''>Transportation</a>
          </li>
          <li>
            <a href=''>Programming Rules</a>
          </li>
        </div> */}
      </div>

      <div className='copyRightDiv flex'>
        <p>Diseño de Cortesía y Desarrollado por Alexis García</p><a href='https://github.com/alexisg24' target='_blank' rel='noreferrer'><AiFillGithub className='icon' /></a>
      </div>
    </div>
  )
}

export { Footer }
