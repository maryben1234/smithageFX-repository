import React from "react";
import "./Academy.css";
import image6 from "../images/image6.jpg";
import image10 from "../images/image10.jpg";
import Button from "./Button";
import Sheetdb from "./sheetdb/sheetdb";
import Layout from "./layout/Layout";

function Academy() {
  return (
    <Layout>
      <div className="">
        <section className="">
          <div className="py-4">
            <h3 className="font-bold text-xl text-black pt-4 text-center">
              Why SmithageFX{" "}
            </h3>
            <h3 className="  text-black md:max-w-4xl mx-auto leading-base py-2 px-4 text-justify">
            SmithageFX Academy offers a range of training programs, from basic to professional, focused on teaching individuals how to navigate the forex market successfully. We help you learn how to manage your accounts and access insightful reports and technical analysis among many more features.
            </h3>
          </div>

          <div className="  p-5 training section   bg-black text-white">
            <div className="  grid md:grid-cols-2 p-5 gap-10 ">
              <div className="">
                <h1 className="p-10 text-blue-200">
                  start your trading journey in Digital Currencies with our 12-month Certificate programme that covers Basic through Advanced knowledge
                  of trading. In adddition to the technical know-how of the market, psychological trading is given to aspiring traders to equip their trading process and sharpen their skills. These knowledge gained would equip traders with the necessities to access the global financial market and generate sustainable profits.
                </h1>
              </div>
              <div className="">
                <img
                  className=" image1"
                  src="https://eq-cdn.equiti-me.com/website/images/Homepage-Hero.original.format-webp.webp"
                ></img>
              </div>
            </div>
          </div>

          <div className="   text-white  text-center py-10">
            <div className="grid md:grid-cols-2 gap-6 ">
              <div className="">
                <img
                  className="image3"
                  src="https://www.metatrader4.com/i/download/metatrader-4-android.jpg"
                ></img>
              </div>
              <div className=" px-4">
                <p className="text-black font-bold text-4x1"> The Forex Market</p>

                <p className=" text-black text-justify">
                  The FX market is the only truly continuous and non-stop trading
                  market in the world. In the past, the forex market was dominated
                  by institutional firms and large banks, which acted on behalf of
                  clients. Right now, it has become more retail-oriented in recent
                  years, letting traders and investors of all sizes participate in it.
                </p>

                <p className="pt-5 font-bold text-4x1 text-black">
                  How Does the Forex Market Work?
                </p>

                <h1 className="text-black text-justify">
                  At its simplest, forex trading is similar to the currency
                  exchange you may do while traveling abroad: A trader buys one
                  currency and sells another, and the exchange rate constantly
                  fluctuates based on supply and demand. Currencies are traded in
                  the foreign exchange market, a global marketplace that opens 24
                  hours a day; Monday through Friday. All forex trading is
                  conducted over the counter (OTC), meaning there is no physical
                  exchange (as there is for stocks) and a global network of banks
                  and other financial institutions oversee the market (instead of
                  a central exchange, like the New York Stock Exchange).
                </h1>
                <div className="pt-4">
                  <a href="#regForm">
                    <button className="py-2 px-4 bg-blue-600  text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "> GET STARTED</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <img
              className="image1"
              src="https://metatradersoft.net/uploads/posts/2017-04/1491231016_logo.png"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/images/MT5.original.format-webp.webp"
            ></img>
            <img
              className=" image1"
              src="https://eq-cdn.equiti-me.com/website/images/Homepage-Hero.original.format-webp.webp"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/documents/Forex_pairs.svg"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/documents/cryptos.svg"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/documents/global_sectors_nes4Ohi.svg"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/images/indices-hero.original.format-webp.webp"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/images/transfer-funds-securely.original.format-webp.webp"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/images/Online_trading_products_homepage.original.format-webp.webp"
            ></img>

            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/images/partnerships_hero_ban.2e16d0ba.fill-400x400.format-webp.webp"
            ></img>
            <img
              className="image1"
              src="https://eq-cdn.equiti-me.com/website/images/all-products.original.2e16d0ba.fill-400x400.format-webp_qlJenG7.webp "
            ></img>

            
          </div> */}
          
          <div className="mt-4">
            <Sheetdb />
          </div>

          <div className="md:mx-20 mx-4 p-4 shadow w-fit"> 
              <ul>
                <li><b>Bank Name:</b> UBA</li>
                <li><b>Account Name: </b> Smitage Academy</li>
                <li><b>Account No.:</b> 1021661067</li>
              </ul>
          </div>

          {/* <div className="training section   bg-black text-white">
            forex market123456
          </div> */}
        </section>
      </div>
    </Layout>
  );
}

export default Academy;
