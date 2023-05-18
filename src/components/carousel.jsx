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


export default function Carousels() {
    return (

        <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div className=''>
                <div>
                    <div className='md:h-[800px] h-fit'>
                        <img src={Image1} className='' />
                      

                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInUp" className='carousel-text'>
                            <div >
                                <p>
                                    Welcome to SmithFx
                                </p>
                            </div>
                        </AnimationOnScroll>
                </div>
            </div>

            <div className=''>
                <div className=''>
                    <div className='md:h-[800px] h-fit'>
                        <img src={Image2} className='' />
                        <AnimationOnScroll animateIn="animate__fadeInUp" className='carousel-text'>
                            <div >
                                <p>
                                    Welcome to SmithFx
                                </p>
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
                            <div >
                                <p>
                                    Welcome to SmithFx
                                </p>
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
