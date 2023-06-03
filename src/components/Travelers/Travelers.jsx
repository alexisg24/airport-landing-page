import { useEffect } from 'react'
import dubai from '../../assets/dubai.jpg'
import user from '../../assets/user.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month</h2>

        <div className='travelersContainer grid'>
          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={dubai} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={user} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>IsraTech</span>
                @username
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={dubai} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={user} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>IsraTech</span>
                @username
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={dubai} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={user} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>IsraTech</span>
                @username
              </div>
            </div>
          </div>

          <div className='singleTraveler' data-aos='fade-up' data-aos-duration='2500'>
            <img src={dubai} className='destinationImage' />
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={user} className='travelerImage' />
              </div>
              <div className='travelerName'>
                <span>IsraTech</span>
                @username
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Travelers }
