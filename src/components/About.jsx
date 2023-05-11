import React from "react";
// import smithagepic from "../images/smithagepic.jpg";
import mdpic from "../images/mdpic.jpeg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function About() {
  return (
    <div className="">
      <section>
        <div className="grid md:grid-cols-1   text-center mr-100 ">
          <div className=" text-black md:space-x-6  p-10  ">
            <div className="">
              <div className="col-lg-8 offset-lg-2 p-10 ">
                <h1 className=" text-center  "> SMITHAGEFX LEADERSHIP</h1>
              </div>
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                  DR.SMITH DENNIS BENJAMIN (CEO)
                </h1>
                <img src={image3} className=" image1"></img>
              </div>

              <p className="mt-5  text-center  ">
                Dr. SMITH DENNIC BENJAMIN is the Chief Executive Officer and
                Director of SMITHAGEFX. He holds a Bachelor of Engineering
                degree in Electrical and Electronics Engineering, university of
                Benin (BSc.), and also Masters of Sciences(MSc.)in Engineering
                Management, university of Benin, Benin City, Edo State, Nigeria.
                Ph.D In Industrial Engineering, and Higher National Certificate
                in Industrial Measurement and Control (London). He is a
                Certified registered member of Chartered Institute of
                Arbitration and Reconciliation. Dr.Ben has consistently led the
                organization with excellence for over a decade and has achieved
                tremendous results.
              </p>
            </div>
          </div>

          <div className=" text-black md:space-x-6 ">
            <div className="">
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                  MRS.SEBASTINE ESSIEN (COO)
                </h1>
                <img src={image1} className=" image1"></img>
              </div>

              <p className="mt-5  text-center  ">
                Mrs. Sebastine Essien is the Chief operative Officer of
                SMITHAGEFX. He holds a Bachelor of Sciences degree in Marine
                Biology, university of Calabar,Calabar. (BSc.), and also
                (BSc.).Social Media Marketing (Applied Business Administraction)
                Brigham Young university (USA). And Google Certified Digital
                Manager, Adconnect Software and Consulting. Mrs. Sebastine
                Essien is currently an advisor at SmithageFX company and Head of
                Operation.
              </p>
            </div>
          </div>

          <div className=" text-black md:space-x-6  p-10  ">
            <div className="">
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                  MR.Godwin Akpan (ASSETS MANAGER)
                </h1>
                <img src={image2} className=" image1"></img>
              </div>

              <p className="mt-5  text-center  ">
                mr. Godwin Akpan .He is asset manager in SmithageFX company. He
                holds a Bachelor of Sciences degree in Marine Biology,
                university of Calabar,Calabar. (BSc.), and also (BSc.).Social
                Media Marketing (Applied Business Administraction) Brigham Young
                university (USA). And Google Certified Digital Manager,
                Adconnect Software and Consulting. Mrs. Sebastine Essien is
                currently an advisor at SmithageFX company and Head of
                Operation.
              </p>
            </div>
          </div>

          <div className="col-lg-8 offset-lg-2  ">
            <h1 className=" text-center text-1xl  ">ABOUT US</h1>

            <p className="text-center text-muted pt-4">
              SmithageFX (SGFX) is afast-growing from which deal with financial
              market, based on the foreign exchange trading profolio management,
              training and mentorship programs, that provide high-quality,
              in-depth knowledge of financial market in the simplicity and
              significant way.We committed to building a strong and
              proffessianal traders community.
            </p>
          </div>

          <div className="col-lg-8 offset-lg-2 mt-5 ">
            <h1 className=" text-center text-1xl  ">HISTORY</h1>
            Foreign Exchande date back to encient time, when traders frist began
            exchanging coin from different countriess. However, the foreign
            exchange itself is the newest of the financial markets. In the last
            undergone some dramatic transformations. The Bretton woods
            agreement, set up in 1944, remained intact untill the early 1970s.
            Trading volume has to float freely in 1971.The basic concept behind
            the foreign exchange (or forex) market is for Trading Currencies on
            Pair against another, it's the world's largest market, consisting
            almost $2trillion in dairly volume and growing rapidly.
            <p className="text-center text-muted pt-4"></p>
          </div>

          <div className="col-lg-8 offset-lg-2 mt-5 ">
            <h1 className=" text-center text-1xl  ">VISION</h1>

            <p className="text-center text-muted pt-4">
              Our Vision is to place a highly skilled trader in every Nigerian
              family, empowering them to become the wealth Creators, within
              their households using our tools and resource. through the
              establishment of financial center, we aim to create an environment
              where making money is as easy as spending it, achieved through
              comprehensive training and trading opportunities.
            </p>
          </div>

          <div className="col-lg-8 offset-lg-2 mt-5 ">
            <h1 className=" text-center text-1xl  ">MISSION</h1>

            <p className="text-center text-muted pt-4">
              As the largest digital finance powerhouse in Nigeria,Our Focus is
              on cultivating individuals with exceptional skill sets to fully
              leverage the opportunities presented by Forex, Cryptocurrency,
              Synthetic Indices and various digital assets. Our mission is to
              equip people with to-notch abilities to maximize their potential
              in these realm of finance.
            </p>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default About;
