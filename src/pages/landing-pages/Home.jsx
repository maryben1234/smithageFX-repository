import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import CarouselComponent from "../../components/CarouselComponent";
import SmithfxVideo from '../../images/smithfx-marketing-video.mp4'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom'

function Home() {
  return (
    
    
      <Layout>
        <CarouselComponent/>

        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="py-10 text-center">
            <h2 className="font-bold text-3xl py-2">ENERGY TRANSITION</h2>

            <p className="px-20">
              We are committed to ensuring sustainability and setting a goal to enable household and industrial energy transition in becoming carbon neutral by 2030. The majority of our progress is achieved through the absolute reduction of the utilization of products and devices with direct emission of greenhouse gasses. Hence, we engage in sales and installation of household and industrial electrical equipment with low energy consumption rate with little or no carbon emission, smart power sourcing and the elimination of resource wastage. We look forward to partnering with our customers to aid them succeed in meeting their energy/power ambitions.
            </p>
          </div>
          
        </AnimationOnScroll>

        <div/>
        



        <div className=" w-full -top-[6rem]">
          <video className='w-full sm:m-auto ' src={SmithfxVideo} type="video/mp4" controls>
          </video>
        </div>


        <div className=" p-20">
          <h2 className="font-bold text-3xl py-2 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-4 py-4">

            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <div className="">
                <img className='rounded h-[400px]' src="https://lh3.googleusercontent.com/p/AF1QipMVPY9nV9amOuvgygpNr4UdO4G0gomRnBtW67Wd=s680-w680-h510" alt="" />
                <p className="py-4">SmithageFX Academy offers a range of training programs, from basic to professional, focused on teaching individuals how to navigate the forex market successfully.</p>
                <button>
                  <Link to="/academy">
                    <a className='text-white bg-blue-600 shadow-md px-3 py-4 text-xs hover:bg-white hover:text-blue-600 hover:border-blue-600'>
                      Learn more
                    </a>
                  </Link>
                </button>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="">
                <img className='rounded h-[400px]' src="https://i.ytimg.com/vi/IoosVsiL0Z4/maxresdefault.jpg" alt="" />
                <p className="py-4">We help you learn how to manage your accounts and access insightful reports and technical analysis among many more features.</p>
                <button>
                  <a className='text-white bg-blue-600 shadow-md px-3 py-4 text-xs hover:bg-white hover:text-blue-600 hover:border-blue-600'
                    href="https://portal.equiticlients.com" target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>
                </button>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInRight">
              <div className="">
                <img className='rounded h-[400px]' src="https://comparebrokers.co/img/myfxbook-brokers.jpg" alt="" />
                <p className="py-4">Get daily payouts with our award winning partner program.</p>
                <button>
                  <a className='text-white bg-blue-600 shadow-md px-3 py-4 text-xs hover:bg-white hover:text-blue-600 hover:border-blue-600'
                    href="https://www.myfxbook.com" target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>
                </button>
              </div>
            </AnimationOnScroll>

          </div>

        </div>

      </Layout>
    
    
  );
}

export default Home;
