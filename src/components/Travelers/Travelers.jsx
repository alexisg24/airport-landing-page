import dubai from '../../assets/dubai.jpg'
import user from '../../assets/user.jpg'

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Top travelers of this month</h2>

        <div className='travelersContainer grid'>
          <div className='singleTraveler'>
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

        <div className='travelersContainer grid'>
          <div className='singleTraveler'>
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

        <div className='travelersContainer grid'>
          <div className='singleTraveler'>
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
