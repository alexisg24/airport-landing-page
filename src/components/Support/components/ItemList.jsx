import { systemInfo } from '../../../data'
const ItemList = () => {
  return (
    <div className='textDiv grid'>
      {
        systemInfo.map(({ title, desc }, index) => {
          let style = 'colorOne'
          if (index % 2 === 0) style = 'colorTwo'
          const indexItem = (String(index).length > 1) ? index + 1 : `0${index + 1}`
          return (
            <div
              data-aos='fade-down'
              data-aos-duration='2500'
              className='singleInfo'
              key={title}
            >
              <span className={`number ${style}`}>{indexItem}</span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          )
        })
    }
    </div>
  )
}

export { ItemList }
