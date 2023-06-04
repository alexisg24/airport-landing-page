import { useEffect } from 'react'
import back from '../../assets/back.jpg'
import users from '../../assets/users.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

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
            <img src={back} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={users} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>Mantenimientos</span>
                IAJC
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={back} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={users} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>Vuelos</span>
                IAAEF
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={back} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={users} className='travelerImage' />
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
                <img src={users} className='travelerImage' />
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
