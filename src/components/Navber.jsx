
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react"; 
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import smithagefx from "../images/smithagefx.jpg";


 function Navber() {
   const navRef= useRef();
const showNavbar =() =>{
    navRef.current.classList.toggle("responsive_nav");
}

  return (
    <> 
    <nav className='navbar' ref={navRef}>
    <img src={smithagefx} className="smithagefx-image"></img>
    
    

    <ul id='navbar'>
   
    

    <li>
    <Link to="/Home">Home</Link>
    </li>
    
    <li>
    <Link to="/Service">Service</Link>
    </li>
    <li>
    <Link to="/Features">Features</Link>
    </li>
    <li>
    <Link to="/Pricing">Pricing</Link>
    </li>
    <li>
    <Link to="/Team">Team</Link>
    </li>
    <li>
    <Link to="/Blog">Blog</Link>
    </li>
    <li>
    <Link to="/Contact">Contact</Link>
    </li>
    
    </ul>
    
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    <FaTimes/>
    </button>
     </nav>
 
     <button className="nav-btn " onClick={showNavbar}>
     <FaBars/>
     </button>

    <Outlet/>
    </>
  )
}

export default Navber
