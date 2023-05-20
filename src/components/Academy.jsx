import React from "react";
import "./Academy.css";
import image6 from "../images/image6.jpg";
import image10 from "../images/image10.jpg";
import Button from "./Button";
import Layout from "./layout/Layout";

function Academy() {
  return (
    <Layout>
    <div className="">
      <section className="">
        <div className="">
          <h3 className="font-bold text-1x1 text-black p-5 text-center">
            Why SmithageFX{" "}
          </h3>
          <h3 className="  p-3  text-black  ">
            SmithageFX Academy offers a range of training programs, from basic
            to professional, focused on teaching individuals how to navigate the
            forex market successfully. With an emphasis on risk management, our
            courses empower traders to leverage the abundant opportunities
            available in the market and achieve consistent profitability. By
            enrolling in our academy, individuals gain the skills and knowledge
            needed to access the forex market confidently and generate
            sustainable profits.
          </h3>
        </div>

        <div className="  p-5 training section   bg-black text-white ga">
          <div className="  grid md:grid-cols-2 p-5 gap-10 ">
            <div className="">
              <h1 className="p-10 text-blue-200">
                Start trading digital currencies in 12-month certificate course
                with these Packages (Basic, Intermediate and Advance ) in areas
                such as Introduction to Forex and platform Set Up , Forex
                Broker, forex analysis ( Fundamental,Technical and Sentimental).
                Designed for continuing professional traders, these flexible
                courses will allow you to tailor and enhance your skills.
                Individuals gain the skills and knowledge needed to access the
                forex market confidently and generate sustainable profits.
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

        <div className="   text-white  text-center">
          <div className="grid md:grid-cols-2 gap-10 ">
            <div className="">
              <img
                className="image3"
                src="https://www.metatrader4.com/i/download/metatrader-4-android.jpg"
              ></img>
            </div>
            <div className="">
              <p className="text-black font-bold text-4x1">Forex Market</p>

              <p className=" text-black">
                The FX market is the only truly continuous and nonstop trading
                market in the world. In the past, the forex market was dominated
                by institutional firms and large banks, which acted on behalf of
                clients. But it has become more retail-oriented in recent
                years—traders and investors of all sizes participate in it.
              </p>
              <p className="p-5 font-bold text-4x1 text-black">
                How Does the Forex Market Work
              </p>

              <h1 className="text-black">
                At its simplest, forex trading is similar to the currency
                exchange you may do while traveling abroad: A trader buys one
                currency and sells another, and the exchange rate constantly
                fluctuates based on supply and demand. Currencies are traded in
                the foreign exchange market, a global marketplace that’s open 24
                hours a day Monday through Friday. All forex trading is
                conducted over the counter (OTC), meaning there’s no physical
                exchange (as there is for stocks) and a global network of banks
                and other financial institutions oversee the market (instead of
                a central exchange, like the New York Stock Exchange).
              </h1>
              <div className="text-black">
                
                <Button className="py-2 px-4 bg-black  text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "> GET STARTED</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
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
        </div>
        <div className="training section   bg-black text-white">
          forex market123456
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default Academy;
