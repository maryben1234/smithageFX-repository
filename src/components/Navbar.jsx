import React, { useState } from "react";
import "./Naavbar.css";
import Logo from "../images/smithagepic.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar shadow-md">
      <div className="nav-container flex items-center justify-between">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} className="w-[60px] h-[60px]" alt="" />
          </Link>
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul className="flex">
            <li>
              <Link to="/" className="text-[20px] mr-7">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[20px] mr-7">
                About
              </Link>
              <div className="dropdown-content">
                <Link to="/services/service1">Service 1</Link>
                <Link to="/services/service2">Service 2</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/services" className="text-[20px] mr-7">
                Services
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/products" className="text-[20px] mr-7">
                Careers
              </Link>
              <div className="dropdown-content">
                <div>
                  <Link to="/products/product1">Product 1</Link>
                </div>
                <div>
                  <Link to="/products/product2">Product 2</Link>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/services" className="text-[20px] mr-7">
                Portfolio
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/services" className="text-[20px] mr-7">
                Products
              </Link>
              <div className="dropdown-content">
                <div>
                  <Link to="/contact/address">Address</Link>
                </div>
                <div>
                  <Link to="/contact/phone">Phone</Link>
                </div>
                <div>
                  <Link to="/contact/email">Email</Link>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/contact" className="text-[20px]">
                Contact
              </Link>
             
            </li>
          </ul>
        </div>
        {/* <div className="nav-icon" onClick={toggleNav}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import DropDown from "./Dropdown";
// //   import Button from './Button'
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Logo from "../images/smithagepic.jpg";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [dropdown2, setDropdown2] = useState(false);
//   const [dropdown3, setDropdown3] = useState(false);

//   const changeClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseClick = () => {
//     setDropdown(!dropdown);
//   };
//   const onMouseClick2 = () => {
//     setDropdown2(!dropdown2);
//   };

//   //   const onMouseClick3 = () => {
//   //       setDropdown3(!dropdown3);
//   //   }

//   const onMouseEnter = () => {
//     setDropdown(true);
//   };

//   const onMouseLeave = () => {
//     setDropdown(false);
//   };

//   const onMouseEnter2 = () => {
//     setDropdown2(true);
//   };

//   const onMouseLeave2 = () => {
//     setDropdown2(false);
//   };

//   const onMouseEnter3 = () => {
//     setDropdown3(true);
//   };

//   const onMouseLeave3 = () => {
//     setDropdown3(false);
//   };

//   return (
//     <>
//       <section>
//         <nav className="flex items-center justify-center">
//           <div>
//             <img className="w-[80px] h-[80px]" src={Logo} alt="" />
//           </div>
//           <ul className="flex items-center ">
//             <li className="">home</li>
//             <li className="nav-items lg:hidden block" onClick={onMouseClick}>
//               <Link className="nav-links">
//                 {" "}
//                 ABOUT <i class="fa-solid fa-angle-down"></i>
//                 {dropdown && (
//                   <ul className="dropdown-menu w-52" onClick={closeMobileMenu}>
//                     <li>
//                       <a className="menu-items" href="/about#dgisleadership">
//                         DGIS Leadership
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="/about#history">
//                         History
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="/about#diversity">
//                         Diversity
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="/about#transition">
//                         Energy Transition
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </Link>
//             </li>
//             <li>home</li>
//             <li>home</li>
//             <li>home</li>
//           </ul>
//         </nav>
//       </section>
//     </>
//   );
// }

// export default Navbar;

// {
//   /* <nav className="navbar">
//           <div className="logo">
//             <Link to="/" >
//               <img src={Logo} className="" alt="" />
//               <i className='fas fa-home' />
//               <h6 className='' href="/">SmithageFX</h6>
//             </Link>
//           </div>

//           <div className="menu-icon" onClick={changeClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>

//           <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
//             <li className="nav-items">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 {" "}
//                 HOME{" "}
//               </Link>
//             </li>

//             <li className="nav-items lg:hidden block" onClick={onMouseClick}>
//               <Link className="nav-links">
//                 {" "}
//                 ABOUT <i class="fa-solid fa-angle-down"></i>
//                 {dropdown && (
//                   <ul className="dropdown-menu w-52" onClick={closeMobileMenu}>
//                     <li>
//                       <a className="menu-items" href="/about#dgisleadership">
//                         DGIS Leadership
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="/about#history">
//                         History
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="/about#diversity">
//                         Diversity
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="/about#transition">
//                         Energy Transition
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </Link>
//             </li>

//             <li className="nav-items">
//               <Link
//                 to="/services"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 {" "}
//                 SERVICES{" "}
//               </Link>
//             </li>

//             <li
//               className="nav-items hidden lg:block"
//               onMouseEnter={onMouseEnter2}
//               onMouseLeave={onMouseLeave2}
//             >
//               <Link className="nav-links flex items-end gap-1">
//                 {" "}
//                 CAREERS <i class="fa-solid fa-angle-down"></i>
//                 {dropdown2 && (
//                   <ul
//                     className="dropdown-menu w-auto"
//                     onClick={closeMobileMenu}
//                   >
//                     <li>
//                       <a className="menu-items" href="/careers#whydgis">
//                         Why DGIS
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="careers#whatwelookfor">
//                         What are we looking for?
//                       </a>
//                     </li>
//                     <li>
//                       <a className="menu-items" href="careers#trainings">
//                         Trainings and Internships
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </Link>
//             </li>

//             <li className="nav-items">
//               <Link
//                 to="/portfolio"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 {" "}
//                 PORTFOLIO{" "}
//               </Link>
//             </li>

//             <li
//               className="nav-items"
//               onMouseEnter={onMouseEnter3}
//               onMouseLeave={onMouseLeave3}
//             >
//               <Link className="nav-links flex items-end gap-1">
//                 {" "}
//                 PRODUCTS <i class="fa-solid fa-angle-down"></i>
//                 {dropdown3 && (
//                   <ul
//                     className="dropdown-menu w-auto"
//                     onClick={closeMobileMenu}
//                   >
//                     <li>
//                       <a className="menu-items" href="/careers#whydgis">
//                         Packages
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </Link>
//             </li>

//             <li className="nav-items">
//               <Link
//                 to="/contact"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 {" "}
//                 CONTACT{" "}
//               </Link>
//             </li>

//             <div class="header-social-links d-flex">
//               <a href="https://web.facebook.com/DGIS28" class="facebook">
//                 <i class="fa-brands fa-facebook"></i>
//               </a>
//               <a href="https://www.instagram.com/dgissolar/" class="instagram">
//                 <i class="fa-brands fa-instagram"></i>
//               </a>
//             </div>
//           </ul>

//           <Button />
//         </nav> */
// }
