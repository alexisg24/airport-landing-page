import { useEffect } from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const goToTop = () => { window.location.href = '#top' }
const Info = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='info section'>
      <div className='infoContainer container'>

        <div className='titleDiv flex'>
          <h2 data-aos='fade-right' data-aos-duration='2500'>¿Qué ofrecemos?</h2>
          <button
            data-aos='fade-left' data-aos-duration='2500'
            className='btn'
            onClick={goToTop}
          >
            Ver Sistemas
          </button>
        </div>

        <div className='cardsDiv grid'>

          <div data-aos='fade-up' data-aos-duration='2500' className='singleCard grid'>
            <div className='iconDiv Flex'>
              <RxCalendar className='icon' />
            </div>
            <span className='cardTitle'>Búsquedas y filtros</span>
            <p>Nuestros sistemas ofrecen búsquedas y filtrado de datos por fechas, tipos, entre otros.</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className='singleCard grid'>
            <div className='iconDiv Flex colorOne'>
              <BsShieldCheck className='icon' />
            </div>
            <span className='cardTitle'>Seguridad y tranquilidad</span>
            <p>Todos nuestros sistemas cuentan con un sistema de logueo para controlar el acceso de usuarios.</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className='singleCard grid'>
            <div className='iconDiv Flex colorTwo'>
              <BsBookmarkCheck className='icon' />
            </div>
            <span className='cardTitle'>Guardamos tus datos</span>
            <p>Poseemos copias de seguridad de los sistemas para cualquier eventualidad.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Info }
