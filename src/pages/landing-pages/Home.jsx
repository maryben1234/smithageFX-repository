import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import CarouselComponent from "../../components/CarouselComponent";
import SmithfxVideo from '../../images/smithfx-marketing-video.mp4'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Home() {
  return (
    <div className="">
      <Layout>
          <CarouselComponent />

          <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="py-10 text-center">
              <h2 className="font-bold text-3xl py-2">ENERGY TRANSITION</h2>
             
              <p className="px-20">
              We are committed to ensuring sustainability and setting a goal to enable household and industrial energy transition in becoming carbon neutral by 2030. The majority of our progress is achieved through the absolute reduction of the utilization of products and devices with direct emission of greenhouse gasses. Hence, we engage in sales and installation of household and industrial electrical equipment with low energy consumption rate with little or no carbon emission, smart power sourcing and the elimination of resource wastage. We look forward to partnering with our customers to aid them succeed in meeting their energy/power ambitions.
              </p>
          </div>
            </AnimationOnScroll>

        

          <div className=" w-full -top-[6rem]">
                <video className='w-full sm:m-auto ' src={SmithfxVideo} type="video/mp4" controls>
                </video>
            </div>

      </Layout>

    </div>
  );
}

export default Home;
