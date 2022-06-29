import React from 'react'
import BgFooter from '../../assets/mobile/showcasse/OldTraford.png'
import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='min-h-[100vh] w-[100vw] bg-white relative text-black flex flex-col items-center text-center' id='footer'>
      <section className='background-footer section-bg-flex'>
        <div className="w-[100%] absolute flex justify-center items-center opacity-70">
          <img src={BgFooter} alt="background" />
        </div>
        <h1 className='h1-footer h1-mobile  '>
          Join The Manchester
          <br />
          United Club
        </h1>
        <div className='container flex w-[100%] lg:w-[35%] lg:justify-end justify-center'>
          <button className='property-buttonJoin prop-button-mobile '>Join Now</button>
        </div>
      </section>
      <div className='container w-[90%] lg:w-[75%]  flex flex-col justify-center lg:flex-row lg:justify-between
      items-center border-solid border-b-[1px] border-b-black'>
        <div>
          <h1 className=' font-AkayaTelivigala text-red-600 transition-all duration-[0.2s] ease-[ease] delay-[0s] scale-[1.1] text-[4rem] '>
            <a href='https://www.manutd.com/'>MUT.</a>
          </h1>
          <div className='flex justify-center items-center gap-4 py-6 text-red-600'>
            <FaFacebook href='https://www.facebook.com/manchesterunited/' size={"2rem"} />
            <FaInstagramSquare href='https://www.instagram.com/manchesterunited/' size={"2rem"} />
            <FaTwitter href='https://twitter.com/ManUtd' size={"2rem"} />
            <FaLinkedin href='https://www.linkedin.com/company/manchester-united/' size={"2rem"} />
          </div>
        </div>
        <ul className='container hidden lg:grid list-none w-[50%] gap-4 grid-cols-2'>
          <li className='w-fit cursor-pointer'>Home</li>
          <li className='w-fit cursor-pointer'>About</li>
          <li className='w-fit cursor-pointer'>Roadmap</li>
          <li className='w-fit cursor-pointer'>Showcase</li>
          <li className='w-fit cursor-pointer'>FAQ</li>
          <li className='w-fit cursor-pointer'>Team</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer