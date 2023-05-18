import React from "react";
import "./Services.css";
import { TbBinaryTree } from "react-icons/tb";
import { BsFillHouseLockFill } from "react-icons/bs";
// import {BsDice2} from "react-icons/bs"
import { AiOutlineBank } from "react-icons/ai";
import { BiDiamond } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import Layout from "./layout/Layout";

function Services() {
  return (
    <Layout>
    <div>
      <div className="grid md:grid-cols-3  gap-8 p-5 text-center ">
        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
              <BsCoin className="service-icon hover:scale-110 transition duration-300 ease-in-out" />
              <h1 className=" text-center text-[14px] font-normal hover:font-bold p-5">
                Forex training <br></br> and trading
              </h1>
            </p>
          </div>
        </div>
        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
              <BiDiamond className="service-icon hover:scale-110 transition duration-300 ease-in-out" />

              <h1 className="pt-3 text-center text-[14px] font-normal hover:font-bold p-5">
                Synthetic Indices <br /> training and trading
              </h1>
            </p>
          </div>
        </div>
        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
              <BsCoin className="service-icon hover:scale-110 transition duration-300 ease-in-out" />
              <h1 className="pt-3 text-center text-[14px] font-normal hover:font-bold p-5">
                Cryptocurrency <br></br>training and trading.
              </h1>
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3  gap-8 p-5 text-center ">
        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
              <BsFillHouseLockFill className="service-icon hover:scale-110 transition duration-300 ease-in-out" />
              <h1 className=" text-center text-[20px] font-normal hover:font-bold p-5">
                Trading HUbs Services
              </h1>
            </p>
          </div>
        </div>
        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
              <TbBinaryTree className="service-icon hover:scale-110 transition duration-300 ease-in-out" />
              <h1 className="pt-3 text-center text-[20px] font-normal hover:font-bold p-5">
                Binary Option <br />
                training and trading
              </h1>
            </p>
          </div>
        </div>
        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
              <AiOutlineBank className="service-icon hover:scale-110 transition duration-300 ease-in-out" />

              <h1 className="pt-3 text-center text-[20px] font-normal hover:font-bold p-5">
                Assets Management Program
              </h1>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Services;
