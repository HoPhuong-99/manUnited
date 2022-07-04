import React from 'react';
import slideHome from "../../assets/mobile/beckkham.png";
import slideHome1 from "../../assets/mobile/nevile.png"
import slideHome2 from "../../assets/mobile/roykane.png"
import slideHome3 from "../../assets/mobile/gigg.png"
import slideHome4 from "../../assets/mobile/schole.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const About = () => {
  return (
    <section className='w-[100%] bg-gradient-to-r from-red-600 to-red-400 min-h-screen flex justify-center flex-col items-center relative 
    overflow-hidden ' id="about">
      <div className='container w-[100%] flex flex-col xl:w-[75%] xl:flex-row justify-center items-center pt-[100px]'>
        <div className='w-[50%] h-[100%]'>
          <Swiper spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}>
            <SwiperSlide>
              <img src={slideHome} alt="logohome" className='w-[100%] object-cover' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideHome1} alt="logohome" className='w-[100%] object-cover' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideHome2} alt="logohome" className='w-[100%] object-cover' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideHome3} alt="logohome" className='w-[100%] object-cover' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideHome4} alt="logohome" className='w-[100%] object-cover' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <div className="container w-[80%] text-white flex flex-col justify-center h-[100%] min-h-[60vh] items-center text-center xl:text-left">
            <h2 className='container text-[2rem] sm:text-[3rem] font-bold font-Sora'>
              Welcome To The
              <br />
              Manchester United Club.
            </h2>
            <p className='text-home text-base '>
              Old Trafford Stadium is the world-famous home of Manchester United, and there's plenty to do when you visit.
            </p>
            <p className='text-home text-[0.875rem] text-slate-500 '>
              Visit on a non-matchday and enjoy a behind the scenes Stadium Tour, get a delicious bite to eat in the Red Cafe or pick up a souvenir in the Megastore.
            </p>
            <div className='w-[100%] my-4 self-start' >
              <button className='inline-block bg-white text-black relative px-[2.3rem] py-[0.9rem] rounded-[30px] '>
                <a href="https://discord.com/">JOIN TO DISCORD</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;