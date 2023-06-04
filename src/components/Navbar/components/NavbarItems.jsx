import { menuItem } from '../../../data'

const NavbarItems = ({ removeNavBar }) => {
  return (
    <div className='menu flex'>
      {
            menuItem.map(({ item, link }) => (
              <a
                className='listItem'
                onClick={removeNavBar}
                key={item}
                href={link}
              >
                {item}
              </a>
            ))
        }
    </div>
  )
}

export { NavbarItems }
