import React, { useState } from 'react'
  import { Link } from 'react-router-dom'
//   import MenuItems from './MenuItems'
  import './Dropdown.css'
  
  function DropDown() {
  
      const [click, setClick] = useState(false)
  
      const handleClick = () => setClick(!click)

      
  const MenuItems = [
    {
        title: 'HTML',
        path: '/html'
    },
    {
        title: 'CSS',
        path: '/css'
    },
    {
        title: 'JavaScript',
        path: '/javascript'
    },
    {
        title: 'Web development',
        path: '/web-development'
    },
    {
        title: 'All Post',
        path: '/category'
    }
]

// export default MenuItems
  
      return (
          <section>
              <section className='drop-section'>
                  <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                      {MenuItems.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link className='menu-items' to={item.path} onClick={() => setClick(false)}>
                                      {item.title}
                                  </Link>
                              </li>
                          )
                      })}
                  </ul>
              </section>
          </section>
      )
  }
  
  export default DropDown;
