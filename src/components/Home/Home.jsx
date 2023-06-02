import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className='homeVideo flex'>
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
