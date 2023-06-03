import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className='homeVideo flex'>
        <div className='homeImages flex'>
          <div className='videoDiv'>
            <video src={video} className='video' autoPlay muted loop />
          </div>

          <img src={aeroplane} alt='' className='plane' />
        </div>
      </div>
    </div>
  )
}

export { Home }
