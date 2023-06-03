import { useEffect } from 'react'
import flight2 from '../../assets/flight2.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>
        <div data-aos='fade-down' data-aos-duration='2500' className='imgDiv'>
          <img src={flight2} />
        </div>

        <div className='textDiv'>
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>
          <div className='grids grid'>

            <div className='singleGrid' data-aos='fade-down' data-aos-duration='3500'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

            <div className='singleGrid' data-aos='fade-down' data-aos-duration='3500'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

            <div className='singleGrid' data-aos='fade-down' data-aos-duration='3500'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

            <div className='singleGrid' data-aos='fade-down' data-aos-duration='3500'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export { Lounge }
