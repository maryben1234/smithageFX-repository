import React from "react";
// import smithagepic from "../images/smithagepic.jpg";

import image1 from "../images/image1.jpg";
// import image2 from "../images/image2.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image12 from "../images/image12.jpeg";
import './About.css'
import Layout from "./layout/Layout";

function About() {
  return (
    < Layout>
      {/* ABOUT Us Section */}

     <div className="grid md:grid-cols-2 gap-10 px-10 py-10">
     <div className=" shadow p-8">
            <h1 className=" text-left font-semibold text-1xl  ">ABOUT US</h1>

            <p className=" pt-4">
            <i className="text-justify text-muted">
              SmithageFX (SGFX) is a fast-growing from which deal with financial
              market, based on the foreign exchange trading profolio management,
              training and mentorship programs, that provide high-quality,
              in-depth knowledge of financial market in the simplicity and
              significant way.We committed to building a strong and
              proffessianal traders community.
            </i>
            </p>
          </div>

          <div className="shadow p-8">
            <h1 id="history" className=" text-left font-semibold text-1xl  ">HISTORY</h1>
            <p className="pt-4">
            <i className="text-justify text-muted">
            Foreign Exchande date back to ancient time, when traders first began
            exchanging coin from different countriess. However, the foreign
            exchange itself is the newest of the financial markets. In the last
            undergone some dramatic transformations. The Bretton woods
            agreement, set up in 1944, remained intact untill the early 1970s.
            Trading volume has to float freely in 1971.The basic concept behind
            the foreign exchange (or forex) market is for Trading Currencies on
            Pair against another, it's the world's largest market, consisting
            almost $2trillion in dairly volume and growing rapidly.
            </i>
            </p>
          </div>

          <div className="shadow p-8">
            <h1 className=" text-left font-semibold text-1xl  ">VISION</h1>

           <p className="pt-4">
           <i className="text-justify text-muted">
              Our Vision is to place a highly skilled trader in every Nigerian
              family, empowering them to become the wealth Creators, within
              their households using our tools and resource. through the
              establishment of financial center, we aim to create an environment
              where making money is as easy as spending it, achieved through
              comprehensive training and trading opportunities.
            </i>
           </p>
          </div>

          <div className="shadow p-8">
            <h1 className=" text-left font-semibold text-1xl  ">MISSION</h1>

           <p className="pt-4">
           <i className="text-justify text-muted">
              As the largest digital finance powerhouse in Nigeria,Our Focus is
              on cultivating individuals with exceptional skill sets to fully
              leverage the opportunities presented by Forex, Cryptocurrency,
              Synthetic Indices and various digital assets. Our mission is to
              equip people with to-notch abilities to maximize their potential
              in these realm of finance.
            </i>
           </p>
          </div>

     </div>


      <div className="">
        <section className="px-10">
          <div className="col-lg-8 offset-lg-2 p-10 ">
            <h1 className=" text-center text-lg font-bold"> SMITHAGEFX LEADERSHIP</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mx-auto ">

            <div className="shadow p-4 hover:scale-110 transition duration-300 ease-in-out ">
              <div className=" text-center text-2xl md:text-base  ">
                <h1 className="pt-3 text-center text-[14px] font-bold ">
                  DR.SMITH DENNIS BENJAMIN (CEO)
                </h1>
                <img src={image3} className=" image1 rounded-full"></img>
              </div>

              <p className="mt-7 text-center text-sm px-4 leading-5">
                Dr. Smith Dennic Benjamin is the Chief Executive Officer and
                Director of SMITHAGEFX. He holds a Bachelor of Engineering
                degree in Electrical and Electronics Engineering, university of
                Benin (BSc.), and also Masters of Sciences(MSc.) in Engineering
                Management, university of Benin, Benin City, Edo State, Nigeria. 
              <p>
              Ph.D in Industrial Engineering, and Higher National Certificate
                in Industrial Measurement and Control (London). He is a
                Certified registered member of Chartered Institute of
                Arbitration and Reconciliation. Dr.Ben has consistently led the
                organization with excellence for over a decade and has achieved
                tremendous results.
              </p>
              </p>
            </div>


            <div className="shadow p-4 hover:scale-110 transition duration-300 ease-in-out ">
              <div className=" text-center text-2xl md:text-base">
                <h1 className="pt-3 text-center text-[14px] font-bold ">
                  MRS.SEBASTINE ESSIEN (COO)
                </h1>
                <img src={image1} className=" image1 rounded-full"></img>
              </div>

              <p className="mt-7 text-center text-sm px-4 leading-5">
                Mr. Sebastine Essien is the Chief Operating Officer of
                SMITHAGEFX. He holds a Bachelor of Sciences degree in Marine
                Biology, university of Calabar,Calabar. (BSc.), and also
                (BSc.).Social Media Marketing (Applied Business Administraction)
                Brigham Young university (USA). And Google Certified Digital
                Manager, Adconnect Software and Consulting. Mrs. Sebastine
                Essien is currently an advisor at SmithageFX company and Head of
                Operation.
              </p>
            </div>

            <div className=" shadow p-4 hover:scale-110 transition duration-300 ease-in-out ">
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px] font-bold ">
                  MR.Godwin Akpan (ASSETS MANAGER)
                </h1>
                <img src={image2} className=" image1 rounded-full"></img>
              </div>

              <p className="mt-7 text-center text-sm px-4 leading-5">
                Mr. Godwin Akpan. He is an asset manager in SmithageFX company. He  is also a commodity and synthetic trader, He has trained and still mentoring students all around the world.
              </p>
            </div>

            <div className=" shadow p-4 hover:scale-110 transition duration-300 ease-in-out ">
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px] font-bold ">
                  MR.Emmanuel Bassey <br /> (INSTRUCTOR IN SMITHAGEFX)
                </h1>
                <img src={image12} className=" image1 rounded-full"></img>
              </div>

              <p className="mt-7 text-center text-sm px-4 leading-5">
                Mr. Emmanuel Bassey, He is a graduates of Political Science and Public Administration , university of Uyo, uyo Akwa Ibom Nigeria. He has a high level insight into the trading world. He is also commodity/Synthetic trader, He has trained and still mentoring students all around the world.
                <p>
                He is performance driven and smart trader, trainer and mentor with a proven track record of extraordinary achievements in conducting detailed technical and fundamental market analysis with a close one to one training and mentorship session and programs. He provide beneficial trading and financial advice to the clients.
                </p>
              </p>
            </div>

          </div>

        
        </section>
      </div>
    </Layout>
  );
}

export default About;
