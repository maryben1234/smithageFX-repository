import React from 'react';
import Image1 from '../images/bitcoin-img.jpeg'
import Image2 from '../images/candlesticks.jpeg'
import Image3 from '../images/trading-lines.jpeg'
import './carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Rotate from 'react-reveal/Rotate';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom'


export default function Carousels() {
    return (

        <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div className=''>
                <div>
                    <div className='md:h-[800px] h-fit'>
                        <img src={Image1} className='' />
                      

                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInUp" className='carousel-text'>
                    <div className='p-4 pb-10'>
                                <p className='text-left text-4xl mb-4'>
                                    Welcome to SmithFx
                                </p>

                                <p className=' text-left text-base mb-4'>SmithageFX Academy offers a range of training programs, from basic to professional, focused on teaching individuals how to navigate the forex market successfully.</p>
                                
                                <button>
                                <Link to="/academy">
                                <a className='bg-blue-600 shadow-md px-3 py-4 text-xs hover:bg-white hover:text-blue-600 hover:border-blue-600' href="" target="_blank" rel="noopener noreferrer">
                                Click here to learn more
                                </a>
                                </Link>
                                </button>
                                
                            </div>
                        </AnimationOnScroll>
                </div>
            </div>

            <div className=''>
                <div className=''>
                    <div className='md:h-[800px] h-fit'>
                        <img src={Image2} className='' />
                        <AnimationOnScroll animateIn="animate__fadeInUp" className='carousel-text'>
                        <div className='p-4 pb-10'>
                                <p className='text-left text-4xl mb-4'>
                                    Welcome to SmithFx
                                </p>

                                <p className=' text-left text-base mb-4'>Get daily payouts with our award winning partner program.</p>
                                
                                <button>
                                <a className='bg-blue-600 shadow-md px-3 py-4 text-xs hover:bg-white hover:text-blue-600 hover:border-blue-600' href="https://www.myfxbook.com" target="_blank" rel="noopener noreferrer">
                                Click here to learn more
                                </a>
                                </button>
                                
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className=''>
                    <div className='md:h-[800px] h-fit'>
                        <img src={Image3} className='' />
                        <AnimationOnScroll animateIn="animate__fadeInUp" className='carousel-text'>
                        <div className='p-4 pb-10'>
                                <p className='text-left text-4xl mb-4'>
                                    Welcome to SmithFx
                                </p>

                                <p className=' text-left text-base mb-4'>Manage your accounts and access insightful reports and technical analysis among many more features.</p>
                                
                                <button>
                                <a className='bg-blue-600 shadow-md px-3 py-4 text-xs hover:bg-white hover:text-blue-600 hover:border-blue-600' href="https://portal.equiticlients.com" target="_blank" rel="noopener noreferrer">
                                Click here to learn more
                                </a>
                                </button>
                                
                            </div>
                        </AnimationOnScroll>
                    </div>

                </div>


            </div>

        </Carousel>
    );
};


// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// export default function CarouselComponent() {
//     return (
//         <div class="carousel-wrapper">
//             <Carousel infiniteLoop useKeyboardArrows autoPlay>
//                 <div>
//                     <img src={Image1} className='' />
//                 </div>
//                 <div>
//                     <img src={Image2} className='' />
//                 </div>
//                 <div>
//                     <img src={Image1} className='' />
//                 </div>
//             </Carousel>
//         </div>
//     );
// }
