import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'
const Info = () => {
  return (
    <div className='info section'>
      <div className='infoContainer container'>

        <div className='titleDiv flex'>
          <h2>Travel to make memories all aroun the world</h2>
          <button className='btn'>
            View All
          </button>
        </div>

        <div className='cardsDiv grid'>

          <div className='singleCard grid'>
            <div className='iconDiv Flex'>
              <RxCalendar className='icon' />
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>You can also call airlines from yout phone and book a flight ticket</p>
          </div>

          <div className='singleCard grid'>
            <div className='iconDiv Flex colorOne'>
              <BsShieldCheck className='icon' />
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>You can also call airlines from yout phone and book a flight ticket</p>
          </div>

          <div className='singleCard grid'>
            <div className='iconDiv Flex colorTwo'>
              <BsBookmarkCheck className='icon' />
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>You can also call airlines from yout phone and book a flight ticket</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Info }
