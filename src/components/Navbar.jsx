import React, { useState } from 'react'
  import DropDown from './Dropdown'
//   import Button from './Button'
  import { Link } from 'react-router-dom'
  import './Navbar.css'
  import Logo from '../images/smithagepic.jpg'
  
  function Navbar() {
  
      const [click, setClick] = useState(false)
      const [dropdown, setDropdown] = useState(false)
      const [dropdown2, setDropdown2] = useState(false)
      const changeClick = () => setClick(!click)
      const closeMobileMenu = () => setClick(false)
  

      const onMouseEnter = () => {
          setDropdown(!dropdown);
      }
      const onMouseEnter2 = () => {
          setDropdown2(!dropdown2);
      }
  
      return (
          <>
              <section>
                  <nav className="navbar">
  
                      <Link to='/' className='logo'> 
                      <img src={Logo} className='' alt="" />
                        {/* <i className='fas fa-home' />  */}
                        </Link>
  
                      <div className="menu-icon" onClick={changeClick}>
                          <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                      </div>
  
                      <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>
  
                          <li className='nav-items'>
                              <Link to="/" className='nav-links' onClick={closeMobileMenu}> Home </Link>
                          </li>
  
                          <li className='nav-items'>
                              <Link to="/about" className='nav-links' onClick={closeMobileMenu}> About </Link>
                          </li>
  
                          <li className='nav-items' onClick={onMouseEnter}  >
                              <Link className='nav-links' > Category <i className='fas fa-caret-down' />
                              {dropdown && 
                                        <ul className='dropdown-menu w-52' onClick={closeMobileMenu}>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                           
                                        </ul>
                                  }
                              </Link>
                          </li>
  
                          <li className='nav-items'>
                              <Link to="/contact" className='nav-links' onClick={closeMobileMenu}> Contact </Link>
                          </li>

                          <li className='nav-items' onClick={onMouseEnter2}  >
                              <Link className='nav-links' > Services <i className='fas fa-caret-down' />
                                  {dropdown2 && 
                                        <ul className='dropdown-menu w-52' onClick={closeMobileMenu}>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                            <li>
                                                <a href="" className='menu-items'>Online</a>
                                            </li>
                                           
                                        </ul>
                                  }
                              </Link>
                          </li>
  
                      </ul>
  
                      {/* <Button /> */}
  
                  </nav>

              </section>
          </>
      )
  }
  
  export default Navbar;