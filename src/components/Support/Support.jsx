import { useEffect } from 'react'
import flight from '../../assets/flight.jpg'
import Aos from 'aos'
import { ItemList } from './components/ItemList'

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='support container section'>
      <div className='sectionContainer'>

        <div className='titlesDiv'>
          <small>Soluciones tecnológicas</small>
          <h2>Todas Tus Aplicaciones En Un Solo Lugar</h2>
          <p>Englobamos todos nuestros servicios y sistemas de manera sencilla para el usuario!</p>
        </div>

        <div className='infoDiv grid'>
          <ItemList />
          <div data-aos='fade-up' data-aos-duration='2500' className='imgDiv'>
            <img src={flight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Support }
