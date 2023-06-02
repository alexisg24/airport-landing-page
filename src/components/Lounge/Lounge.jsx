import flight2 from '../../assets/flight2.jpg'
const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>
        <div className='imgDiv'>
          <img src={flight2} />
        </div>

        <div className='textDiv'>
          <h2>Unaccompanied Minor Lounge</h2>
          <div className='grids grid'>

            <div className='singleGrid'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

            <div className='singleGrid'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

            <div className='singleGrid'>
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, adipisci id temporibus
              </p>
            </div>

            <div className='singleGrid'>
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
