import React from "react";
import { Link } from 'react-router-dom'
import "./footer.css";
import mdpic from "../../images/mdpic.jpeg";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className=" grid md:grid-cols-3 About-footerdiv text-white gap-5  p-5 mt-10">
        <div className="text-center">
          <p className="mt-2 font-bold">SMITHAGEFX</p>
          <p className=" "> Email: smithagecorporation@gmail.com</p>
        </div>
        <div className=" text-left">
          <p className="p-2 font-bold ">USEFUL LINKS</p>
          <div className="text-sm">
         <Link to='/'>
         <p className=" "> Home</p>
         </Link>

         <Link to='/about'>
          <p className=" "> About us</p>
         </Link>
          
          <Link to='/services'>
          <p className=" "> services</p>
          </Link>
          <p className="">Team of Serive</p>
          <p className="">Privacy Policy</p>
          </div>
        </div>
        <div className="text-left">
          <p className="mt-2  p-2 font-bold">OUR SERVICES</p>
          <ul className=" text-sm">
            <li className=" ">Forex training/ trading.</li>
            <li className=" pt-2">Synthetic Indices training/ trading.</li>
            <li className=" pt-2">Cryptocurrency training/ trading.</li>
            <li className="pt-2 ">Binary Option training/ trading.</li>
            <li className=" pt-2">Assets Management Program</li>
            <li className="pt-2"> Trading HUbs Services</li>
            <li className="pt-2"> Trading Mentorship</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 justify-evenly items-center  bg-black text-center text-white space-x-50">
        <div className="  text-center">
          <div className="">
            <h1 className="text-[14px] font-normal hover:font-bold p-3 text-center ">
              <p> &copy; Copyright SGFX 2023.All Rights Reserved</p>
            </h1>
          </div>
        </div>

        <div className=" ">
          <div className=" About-icons  text-[14px]font-normal hover:font-bold  p-5 text-center ">
            <div className=" flex space-x-4">
              <p className="text-[14px]font-normal hover:font-bold p-3 text-center">
                <a href="https://www.instagram.com/smithagefxacademy/?igshid=ZGUzMzM3NWJiOQ=="> <BsInstagram /></a>
               
              </p>
              <p className="text-[14px]font-normal hover:font-bold p-3 text-center">
                <a href=""><BsWhatsapp /></a>
              </p>
              <p className="text-[14px]font-normal hover:font-bold p-3 text-center">
                <a href="https://t.me/smithagefxacademy"> <BsTelegram /></a>
               
              </p>
              <p className="bg-black-500 hover:bg-black-700 p-3 text-center">
                <a href="https://www.facebook.com/Smithagefxacademyinternation?mibextid=LQQJ4d"><AiFillFacebook /></a>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
