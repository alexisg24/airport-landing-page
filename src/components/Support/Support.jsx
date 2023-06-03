import { useEffect } from 'react'
import flight from '../../assets/flight.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='support container section'>
      <div className='sectionContainer'>

        <div className='titlesDiv'>
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find helps with booking and travel plans, see what yo expect along the journey!</p>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div data-aos='fade-down' data-aos-duration='2500' className='singleInfo'>
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum consecte</p>
            </div>
            <div data-aos='fade-down' data-aos-duration='3500' className='singleInfo'>
              <span className='number colorOne'>02</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum consecte</p>
            </div>
            <div data-aos='fade-down' data-aos-duration='4500' className='singleInfo'>
              <span className='number colorTwo'>03</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum consecte</p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className='imgDiv'>
            <img src={flight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Support }
