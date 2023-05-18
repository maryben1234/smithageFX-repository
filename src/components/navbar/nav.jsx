import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../images/smithagepic.jpg'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseOver = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const onMouseClick = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="w-full bg-white shadow sticky top-0 z-20 ">
            <div className="justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block h-20">
                        <Link to='/' className=''>
                            <img src={Logo} className='logo' alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/" className='nav-links'> HOME </Link>
                            </li>

                            <li
                                className="relative"
                                onMouseOver={handleMouseOver}
                                onMouseLeave={handleMouseLeave}
                                onClick={onMouseClick}
                            >
                                <Link className='' > ABOUT <i class="fa-solid fa-angle-down"></i>
                                {showDropdown && (
                                    <ul className="absolute left-0 w-40 mt-2 space-y-2 bg-white rounded-sm p-4 shadow-md z-10">
                                        <li className="text-gray-600 hover:text-blue-600">
                                            <a href="/about#smithageFX leadership">Team</a>
                                        </li>
                                        <li className="text-gray-600 hover:text-blue-600">
                                            <a href="javascript:void(0)">Mission</a>
                                        </li>
                                        <li className="text-gray-600 hover:text-blue-600">
                                            <a href="javascript:void(0)">Vision</a>
                                        </li>
                                    </ul>
                                )}
                                 </Link>
                            </li>

                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
