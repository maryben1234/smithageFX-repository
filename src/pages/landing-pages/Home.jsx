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
              <h2 className="font-bold text-3xl py-2"> TRANSITION</h2>
             
              <p className="px-20">
              SmithageFX Academy provides comprehensive training programs designed to equip individuals with the necessary skills and knowledge to navigate the forex market effectively. Our academy offers courses tailored for beginners, intermediate, advanced, and professional traders, enabling them to tap into the vast opportunities presented by this market and achieve consistent profitability. Throughout the training, we emphasize the importance of implementing robust risk management strategies to ensure capital preservation and minimize potential losses. By enrolling in our programs, individuals gain the expertise required to access the forex market confidently and leverage its potential for generating sustainable profits.
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
