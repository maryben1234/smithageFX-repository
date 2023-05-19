import React from "react";
import "./footer.css";
import mdpic from "../../images/mdpic.jpeg";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className=" grid md:grid-cols-3 About-footerdiv text-center text-white gap-5  p-5 mt-10">
        <div className="">
          <p className="mt-2 p-2  ">SMITHAGEFX</p>
          <p className=" "> Email: maryben698@gmail.com</p>
        </div>
        <div className=" ">
          <p className="mt-2 p-2 ">USEFUL LINKS</p>
          <p className=" "> Home</p>
          <p className=" "> About us</p>
          <p className=" "> services</p>
          <p className="">Team of Serive</p>
          <p className="">Privacy Policy</p>
        </div>
        <div className="">
          <p className="mt-2  p-2">OUR SERVICES</p>
          <ul className="">
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

      <div className="grid md:grid-cols-2  bg-black text-center text-white space-x-50  ">
        <div className="  text-center mt-10">
          <div className="flex ">
            <h1 className="text-[14px]font-normal hover:font-bold p-3 text-center ">
              <p> &copy; Copyright SGFX 2023.All Rights Reserved</p>
            </h1>
          </div>
        </div>

        <div className=" ">
          <div className=" About-icons  text-[14px]font-normal hover:font-bold  p-5 text-center  mt-10  ">
            <div className=" flex space-x-4">
              <p className="text-[14px]font-normal hover:font-bold p-3 text-center">
                <BsInstagram />
              </p>
              <p className="text-[14px]font-normal hover:font-bold p-3 text-center">
                <BsWhatsapp />
              </p>
              <p className="text-[14px]font-normal hover:font-bold p-3 text-center">
                <BsTelegram />
              </p>
              <p className="bg-black-500 hover:bg-black-700 p-3 text-center">
                <AiFillFacebook />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
