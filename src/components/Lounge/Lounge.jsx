import { useEffect } from 'react'
import Aos from 'aos'
import flight2 from '../../assets/flight2.jpg'
import { LoungItems } from './LoungeItems'

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
          <h2 data-aos='fade-down' data-aos-duration='2500'>Digitalizamos tu trabajo</h2>
          <div className='grids grid'>
            <LoungItems />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Lounge }
