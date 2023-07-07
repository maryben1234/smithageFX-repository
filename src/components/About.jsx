import React from "react";
// import smithagepic from "../images/smithagepic.jpg";

// import image1 from "../images/image1.jpg";
// import image2 from "../images/image2.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import coo from "../images/coo.jpeg";
import image12 from  "../images/image12.jpeg";
import './About.css';

import Navbar from './navbar/Navbar';

function About() {
  return (
    <div> 
    <Navbar/>
    

      <section>
        <div className="grid md:grid-cols-1   text-center mr-100 ">
          <div className=" text-black md:space-x-6  p-10  ">
            <div className="">
              <div className="col-lg-8 offset-lg-2 p-5">
                <h1 className=" text-center  "> SMITHAGEFX LEADERSHIP</h1>
              </div>
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                  DR. BENJAMIN DENNIS SMITH   (CEO)
                </h1>
                <img src={image3} className=" image1"></img>
              </div>

              <p className="mt-7  text-center  ">
              Dr. Benjamin Smith, the Chief Executive Officer and Director of SMITHAGEFX has a strong academic background. He obtained a Bachelor of Engineering degree in Electrical and Electronics Engineering from the University of Benin (BSc.), followed by a Master of Sciences (MSc.) in Engineering Management from the same university. Additionally, he holds a Ph.D. in Industrial Engineering and a Higher National Certificate in Industrial Measurement and Control from London. Dr. Ben is also a Certified registered member of the Chartered Institute of Arbitration and Reconciliation.
With over a decade of consistent leadership, Dr. Ben has steered the organization with exceptional skill and achieved remarkable results. His expertise and qualifications have been instrumental in driving the success of SMITHAGEFX.

              </p>
            </div>
          </div>

          <div className=" text-black md:space-x-6 ">
            <div className="">
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                  MR.SEBASTINE ESSIEN (COO)
                </h1>
                
                <img src={coo} className=" image1"></img>
              </div>

              <p className="mt-5  text-center  ">
              
               Mr.Sebastine Essien serves as the Chief Operating Officer at SMITHAGEFX. He holds a Bachelor of Science degree in Marine Biology from the University of Calabar, Calabar, as well as a Bachelor of Science degree in Social Media Marketing (Applied Business Administration) from Brigham Young University in the USA. Additionally, he is a Google Certified Digital Manager and a former Manager at Ad-Connect Software and Consulting. Currently, Mr.Sebastine Essien is a professional Forex and Synthetic trader.
              </p>
            </div>

           

         

          </div>

          <div className=" text-black md:space-x-6  p-10  ">
          <div className="">
            <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
              <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                MR.Godwin Akpan (MANAGER)
              </h1>
              <img src={image2} className=" image1"></img>
            </div>

            <p className="mt-5  text-center  ">
            Mr. Godwin Akpan manages the trading department of SmithageFX Academy, where he specializes in commodity and synthetic trading. In addition to his role in the company,Mr. Akpan also dedicates his time to training and mentoring students from various parts of the world.
            

              
            </p>
          </div>
        </div>

          <div className=" text-black md:space-x-6  p-5  ">
            <div className="">
              <div className=" text-center text-2xl md:text-base  hover:scale-110 transition duration-300 ease-in-out ">
                <h1 className="pt-3 text-center text-[14px]font-normal hover:font-bold ">
                  MR.Emmanuel Bassey (INSTRUCTOR IN SMITHAGEFX)
                </h1>
                <img src={image12} className=" image1"></img>
              </div>

              <p className="mt-5  text-center  ">
              Mr.Emmanuel Bassey, a graduate of Political Science and Public Administration from the University of Uyo in Uyo, Akwa Ibom, Nigeria, possesses extensive knowledge in the trading world. With expertise as a commodity/Synthetic trader, he has been actively involved in training and mentoring students worldwide.
              Mr. Bassey is a results-oriented and intelligent trader, trainer, and mentor. He has a remarkable history of accomplishments, demonstrating exceptional skills in conducting thorough technical and fundamental market analysis. Through personalized one-on-one training sessions and programs, he offers valuable trading insights and financial advice to his clients, ensuring their benefit and success.
              
              </p>
            </div>
          </div>

          <div className="col-lg-8 offset-lg-2  ">
            <h1 className=" text-center text-1xl  ">ABOUT US</h1>

            <p className="text-center text-muted pt-4">
            SmithageFX Academy provides a comprehensive selection of training programs catering to various skill levels, starting from foundational courses and extending to advanced professional programs. Our primary objective is to equip individuals with the necessary knowledge and skills to effectively navigate the forex market with confidence and achieve success.
            </p>
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
            As the largest digital finance powerhouse in Nigeria, Our Focus is on cultivating individuals with exceptional skill sets to fully leverage the opportunities presented by Forex, Cryptocurrency, Synthetic Indices and various digital assets. Our mission is to equip people with to-notch abilities to maximize their potential in these realm of finance. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
