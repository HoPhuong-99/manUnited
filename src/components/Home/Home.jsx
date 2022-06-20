import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import videoIntro from "../../assets/video/HomeIntroduction.mp4"
import logoBg from "../../assets/mobile/home.png"

export const Home = () => {

  const { text } = useTypewriter({
    words: ['Welcome To Manchester', 'Theatre Of Dreams', 'The Greatest Club In The Premier League'],
    loop: 0,
    cursorStyle: '!',
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 1000,
  })

  return (
    <section className='min-h-[calc(100vh-5rem)] w-[100%] relative' id='home'>
      <div className=" min-h-[80vh] flex flex-col-reverse justify-center items-center">
        <div className='w-[100%] mt-8 flex flex-col items-center '>
          <div className="w-[80%] flex flex-col text-center justify-center ">
            <h2 className="font-Sora text-[32px] ">
              Discover A New Era Of Cool
              <div className='text-center'>
                <span className='font-AkayaTelivigala text-red-500'>
                  {text}
                </span>
                <Cursor />
              </div>
            </h2>
            <h3 className='text-base mb-4 font-semibold'>Bored Of Apes? try Something New</h3>
            <div className="flex justify-center">
              <button className='bg-black text-white flex items-center px-8 rounded-[30px] h-[45px]'>
                <p>Explore</p>
              </button>
            </div>
          </div></div>
        <div className="w-[70%] flex justify-center ">
            <video src={videoIntro} autoPlay loop muted  />
        </div>
        <div className='absolute rounded-[50%] border-solid border-[1px] border-black right-4 
       h-16 w-16 bottom-[100%]'>
        <span className='absolute font-Sora text-xl flex justify-center items-center rounded-[50%]
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black w-8 h-8 text-white'>
          ↓
        </span>
        <img src={logoBg} alt="logohome" className='w-[100%] h-auto animate-spinSlow' />
      </div>
      </div>
    </section>
  )
}
export default Home;