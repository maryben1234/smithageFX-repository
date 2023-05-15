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
    const [dropdown3, setDropdown3] = useState(false)
    
    const changeClick = () => setClick(!click)
      const closeMobileMenu = () => setClick(false)

      const onMouseClick = () => {
          setDropdown(!dropdown);
      }
      const onMouseClick2 = () => {
          setDropdown2(!dropdown2);
      }

    //   const onMouseClick3 = () => {
    //       setDropdown3(!dropdown3);
    //   }

    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    const onMouseEnter2 = () => {
        setDropdown2(true)
    }

    const onMouseLeave2 = () => {
        setDropdown2(false)
    }

    const onMouseEnter3 = () => {
        setDropdown3(true)
    }

    const onMouseLeave3 = () => {
        setDropdown3(false)
    }

    return (
        <>
            <section>
                <nav className="navbar px-10">

                    <Link to='/' className='logo'>
                        <img src={Logo} className='' alt="" />
                        {/* <i className='fas fa-home' />  */}
                    {/* <h6 className='' href="/">SmithageFX</h6> */}
                    </Link>

                    <div className="menu-icon" onClick={changeClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                    </div>

                    <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>

                        <li className='nav-items'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}> HOME </Link>
                        </li>
                        <li className='nav-items hidden lg:block' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className='nav-links flex items-end gap-1' > ABOUT <i class="fa-solid fa-angle-down"></i>
                                {dropdown &&
                                    <ul className='dropdown-menu w-52' onClick={closeMobileMenu}>
                                        <li><a className='menu-items' href="/about#smithageFX leadership"> smithageFX Leadership</a></li>
                                        <li><a className='menu-items' href="/about#history">History</a></li>
                                        <li><a className='menu-items' href="/about#vision">Vision</a></li>
                                        <li><a className='menu-items' href="/about#mision">Mission</a></li>
                                    </ul>
                                }
                            </Link>
                        </li>

                        <li className='nav-items lg:hidden block' onClick={onMouseClick}>
                            <Link className='nav-links' > ABOUT <i class="fa-solid fa-angle-down"></i>
                                {dropdown &&
                                    <ul className='dropdown-menu w-52' onClick={closeMobileMenu}>
                                        <li><a className='menu-items' href="/about#sgfxleadership">SGFX Leadership</a></li>
                                        <li><a className='menu-items' href="/about#history">History</a></li>
                                        <li><a className='menu-items' href="/about#vision">Vision</a></li>
                                        <li><a className='menu-items' href="/about#mission">Mission</a></li>
                                    </ul>
                                }
                            </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to="/services" className='nav-links' onClick={closeMobileMenu}> SERVICES </Link>
                        </li>

                        <li className='nav-items hidden lg:block' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} >
                            <Link className='nav-links flex items-end gap-1' > ACADEMY <i class="fa-solid fa-angle-down"></i>
                                {dropdown2 &&
                                    <ul className='dropdown-menu w-auto' onClick={closeMobileMenu}>
                                        <li><a className='menu-items' href="/careers#whydgis">Why smithageFX</a></li>
                                        <li><a className='menu-items' href="careers#whatwelookfor">What are we looking for?</a></li>
                                        <li><a className='menu-items' href="careers#trainings">Training section</a></li>
                                        <li><a className='menu-items' href="careers#trainings">Trainings and mentorship</a></li>

                                    </ul>
                                }
                            </Link>
                        </li>

                        <li className='nav-items  lg:hidden block' onClick={onMouseClick2} >
                            <Link className='nav-links' > ACADEMY<i class="fa-solid fa-angle-down"></i>
                                {dropdown2 &&
                                    <ul className='dropdown-menu w-auto' onClick={closeMobileMenu}>
                                        <li><a className='menu-items' href="/careers#whydgis">Why DGIS</a></li>
                                        <li><a className='menu-items' href="careers#whatwelookfor">What are we looking for?</a></li>
                                        <li><a className='menu-items' href="careers#trainings">Trainings and Internships</a></li>

                                    </ul>
                                }
                            </Link>
                        </li>

                                

                        <li className='nav-items' onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3} >
                            <Link className='nav-links flex items-end gap-1' > PORTFOLIO <i class="fa-solid fa-angle-down"></i>
                                {dropdown3 &&
                                    <ul className='dropdown-menu w-auto' onClick={closeMobileMenu}>
                                        <li><a className='menu-items' href="/careers#whydgis">Packages</a></li>

                                    </ul>
                                }
                            </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}> CONTACT </Link>
                        </li>

                        <div class="header-social-links d-flex">
                            <a href="https://web.facebook.com/DGIS28" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/dgissolar/" class="instagram"><i class="fa-brands fa-instagram"></i></a>
                        </div>

                    </ul>

                    {/* <Button /> */}

                </nav>

            </section>
        </>
    )
}

export default Navbar;