import { useEffect } from 'react'
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'
import Aos from 'aos'
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500' id='top'>Servidor de Sistemas AIJC Englobando Tecnología</h1>
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
