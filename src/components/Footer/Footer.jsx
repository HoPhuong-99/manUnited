import React from 'react'
import BgFooter from '../../assets/mobile/showcasse/OldTraford.png'
import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div>
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
              <a href='https://www.facebook.com/manchesterunited/'><FaFacebook size={"2rem"} /></a>
              <a href='https://www.instagram.com/manchesterunited/'><FaInstagramSquare href='https://www.instagram.com/manchesterunited/' size={"2rem"} /></a>
              <a href='https://twitter.com/ManUtd'><FaTwitter size={"2rem"} /></a>
              <a href='https://www.linkedin.com/company/manchester-united/'><FaLinkedin size={"2rem"} /></a>
            </div>
          </div>
          <ul className='container hidden lg:grid list-none w-[50%] gap-4 grid-cols-2'>
            <Link to="home" spy={true} smooth={true} duration={800} className='w-fit hover:underline cursor-pointer' >Home</Link >
            <Link to="about" spy={true} smooth={true} duration={800} className='w-fit hover:underline cursor-pointer' >About </Link >
            {/* <Link to="roadmap" spy={true} smooth={true} duration={800} className='w-fit hover:underline cursor-pointer' >Roadmap</Link > */}
            <Link to="showcase" spy={true} smooth={true} duration={800} className='w-fit hover:underline cursor-pointer' >Showcase</Link >
            <Link to="team" spy={true} smooth={true} duration={800} className='w-fit hover:underline cursor-pointer' >Team</Link >
            <Link to="faq" spy={true} smooth={true} duration={800} className='w-fit hover:underline cursor-pointer' >Faq</Link >
          </ul>
        </div>
        <div className='container w-[100%] lg:w-[75%] mt-4 flex justify-between items-center flex-col lg:flex-row'>
          <span className='md:mb-4'>
            © 2022 Manchester United Club
          </span>
          <span className='md:mb-4'>
            Made with ❤ by CodeBuck
          </span>
        </div>
      </section>
    </div>
  )
}

export default Footer