import React from "react";
import "./Services.css";
import { TbBinaryTree } from "react-icons/tb";
import { BsFillHouseLockFill } from "react-icons/bs";
// import {BsDice2} from "react-icons/bs"
import { AiOutlineBank } from "react-icons/ai";
import { BiDiamond } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
    <Layout>
      <div className="grid md:grid-cols-3  gap-8 p-5 text-center ">

        <div className="bg-white services-box">
          <div className="text-center">
            <p className="text-center ">
           
            <img
            className="service-icon hover:scale-110 transition duration-300 ease-in-out"
            src="https://eq-cdn.equiti-me.com/website/documents/Forex_pairs.svg"
          ></img>
              
              <h1 className=" text-center text-[14px] font-normal hover:font-bold p-5">
                Forex training  and trading
              </h1>
              <p className="p-3">
              The forex industry, also known as the foreign exchange market, is a global decentralized market where currencies are bought and sold. It is the largest financial market in the world, with trillions of dollars being traded daily. The forex market involves various participants, including central banks, commercial banks, investment firms, corporations, retail traders, and speculators. These participants trade currencies to meet their business needs, hedge against risks, or profit from fluctuations in exchange rates.
              </p>
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
              <p>
              Synthetic indices are financial instruments that simulate the price movements of various underlying assets, such as stocks, commodities, or currencies. They are created by utilizing complex mathematical models and algorithms to generate synthetic price data. These indices allow traders and investors to speculate on the performance of the underlying market without directly owning the assets. Synthetic indices provide a convenient and accessible way to participate in the financial markets and can be traded on various online platforms.
              </p>
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
              <p>
              Cryptocurrency is a digital or virtual form of currency that utilizes cryptography for security and operates on decentralized networks called blockchains. It emerged with the introduction of Bitcoin in 2009 and has since grown into a diverse ecosystem of thousands of cryptocurrencies.  Cryptocurrencies enable peer-to-peer transactions without the need for intermediaries such as banks. They are based on blockchain technology, which ensures transparency, immutability, and decentralized control.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
      
  
      
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
