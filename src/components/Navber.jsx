
import {FaBars, FaTimes} from "react-icons/fa";
import {BsFacebook, BsInstagram} from "react-icons/bs"
import {useRef} from "react"; 
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import smithagepic from "../images/smithagepic.jpg";
// import Dropdown from "./Dropdown";


 function Navber() {
   const navRef= useRef();
const showNavbar =() =>{
    navRef.current.classList.toggle("responsive_nav");
}

  return (
    <> 
    <nav className='navbar' ref={navRef}>
   <div> <img src={smithagepic} className="smithagefx-image"></img>
  
   </div>
   
    
    

    <ul id='navbar'>
   
    

    <li>
    <Link to="/Home">Home</Link>
    </li>
    <li>
    <Link to="/Home">About </Link>
    </li>
    <li>
    <Link to="/Service">Service</Link>
    </li>
   
    
    <li>
    <Link to="/Team">Careers</Link>
    </li>

    
    <li>
    <Link to="/Contact">Contact</Link>
    </li>
    
    </ul>
    
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    <FaTimes/>
    </button>

    <div>
    <a href="https://www.facebook.com/profile"><BsFacebook/></a>
   
     </div>
     

     </nav>
 
     <button className="nav-btn " onClick={showNavbar}>
     <FaBars/>
     </button>

    <Outlet/>
    </>
  )
}

export default Navber
