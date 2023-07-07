import React from 'react';
// import coo from "../images/coo.jpeg";
import Layout from './layout/Layout'

function Projects() {
    return (
        <Layout >
            <div className='px-20'>
                <div className="py-10 text-center">
                        <h2 className="font-bold text-3xl py-2">OUR GALLERY</h2>
                        <p>Welcome to our gallery, where you'll discover an exquisite collection of captivating visuals that brings the world of currency trading to life.</p>
                </div>

                <div className="h-fit md:h-[38rem] grid  md:grid-cols-4 sm:grid-cols-3 grid-rows-2 gap-4">
                    <img className='rounded'  src="https://lh3.googleusercontent.com/p/AF1QipMVPY9nV9amOuvgygpNr4UdO4G0gomRnBtW67Wd=s680-w680-h510" alt="" />

                    <img className='rounded'  src="https://lh3.googleusercontent.com/p/AF1QipMzDKNpUPE44lNWxXQVfX3BtGeh9R14s6FrweBO=s680-w680-h510" alt="" />

                    <img className='rounded'  src="https://lh3.googleusercontent.com/p/AF1QipPlRKZvxxwTzIM6yFGkDbKTnpVdJZiHMNaNz5rI=s680-w680-h510" alt="" />

                    <img className='rounded' src="https://lh3.googleusercontent.com/p/AF1QipMKY5csn7RHwjyLMw9JCddjbiEg1QAk6OxiVT07=s680-w680-h510" alt="" />

                    <img className='rounded' src="https://lh3.googleusercontent.com/p/AF1QipMHWFRTUiBJprMt6A3iMyngFXSxfg-4pHCvy5t5=s680-w680-h510" alt="" />

                    <img className='rounded' src="https://lh3.googleusercontent.com/p/AF1QipOV2eJriRJPS79OEmqegwAW7GL-xUIdOdvtwtNn=s680-w680-h510" alt="" />


                </div>

                <div  className="py-10 text-center">
                    <p className='font-bold text-2xl py-6'>During our Ceremony</p>

                    <div className="h-fit md:h-[38rem] grid md:grid-cols-4 sm:grid-cols-3 grid-rows-2 gap-4">

                     
                        <img className='rounded' src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/236015037_221407819908411_9003373817512537699_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9C0mmDe4DD4AX8rxexC&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfATxWzumgapPMA7sG3hNE1-4OYCRi-cYDvTYBBS0gGmlA&oe=6481A6F3" alt="" />
                        
                        {/* <img className='rounded' src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/236435554_221406769908516_4774824890540626051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EYoSamibJScAX8dx2Vu&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfClERtKJ8JxcN5XU80qLhgmn1MTNWRBUlrDjDBBGcLsDw&oe=6480E047" alt="" /> */}

                        <img className='rounded' src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/236232230_221407236575136_6171756801921703367_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QJfjP_3SYuYAX8jdY2d&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfAopWyA16SfZecufMz8wAjsf8a7QbDO3qGv9OJiZdU9DQ&oe=64817BC8" alt="" />
                        
                        <img className='rounded' src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/236305441_221407313241795_5609145566204924489_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ie-fKchgkUQAX-DX6FU&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDVL54SUtCBl9FcpnXaz_xzscgG7v1MEnvtZ23Hf1fedQ&oe=6480FC94" alt="" />
                        
                        <img className='rounded' src="https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/236991726_221406856575174_1696972825408427723_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SINqg9ZeQ_QAX9_sU2o&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfBI-4Kmyq5uFLWNp9i5c1QvVr3i8Si8u9i6-iR2qNBPSw&oe=64828129" alt="" />

                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects