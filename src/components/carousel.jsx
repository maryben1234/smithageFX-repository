import React from 'react';
import Image1 from '../images/bitcoin-img.jpeg'
import Image2 from '../images/candlesticks.jpeg'
import Image3 from '../images/trading-lines.jpeg'
import './carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carousels() {
    return (

        <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div className=''>
                <div>
                    <div className=''>
                        <img src={Image1} className='' />
                               <div className='carousel-text'>
                               <p>
                                    Welcome to SmithFx
                                </p>
                               </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className=''>
                    <div className=''>
                        <img src={Image2} className='' />
                        <div className='carousel-text'>
                               <p>
                                    Welcome to SmithFx
                                </p>
                               </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className=''>
                    <div className=''>
                        <img src={Image3} className='' />
                        <div className='carousel-text'>
                               <p>
                                    Welcome to SmithFx
                                </p>
                               </div>
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
