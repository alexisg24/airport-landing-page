import { useEffect } from 'react'
import back from '../../assets/back.jpg'
import logo from '../../assets/logo.png'
import maintenance from '../../assets/mantenimientos.png'
import flight from '../../assets/vuelos.png'
import Aos from 'aos'

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500'>Sistemas disponibles</h2>

        <div className='travelersContainer grid'>
          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={maintenance} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={logo} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span><a href='/maintenances'>Mantenimientos</a></span>
                IAJC
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={flight} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={logo} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span><a href='/flights'>Vuelos</a></span>
                IAAEF
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={back} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={logo} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>Próximamente</span>
                IAAEF
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={back} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={logo} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>Próximamente</span>
                IAAEF
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Travelers }
