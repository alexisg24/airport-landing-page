import { systemElements } from '../../data'
const LoungItems = () => {
  return (
    <>
      {
        systemElements.map(({ title, desc }) => (
          <div className='singleGrid' data-aos='fade-down' data-aos-duration='3500' key={title}>
            <span className='gridTitle'>
              {title}
            </span>
            <p>
              {desc}
            </p>
          </div>
        ))
    }
    </>
  )
}

export { LoungItems }
