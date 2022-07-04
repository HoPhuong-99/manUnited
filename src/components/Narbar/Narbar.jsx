import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

export const Narbar = (props) => {
  const [isMenu, setMenu] = useState(false)
  const { isMobile } = props
  const handleMenu = () => {
    setMenu(!isMenu)
  }

  return (
    <section className='w-[100%] h-[80px] flex items-center justify-center' id='navigation'>
      <nav className='w-[85%] h-[80px] flex items-center justify-between'>
        <h1 className="font-AkayaTelivigala text-4xl text-red-600 cursor-pointer font-bold">
          <a href="https://www.manutd.com/">MUT.</a>
        </h1>
        {
          isMobile ? (
            <div className='absolute left-[48%] flex justify-center'>
              <ul className=''>
                {
                  isMenu ? (<AiOutlineArrowDown size={"30px"} onClick={handleMenu} />
                  )
                    :
                    (
                      <AiOutlineMenu size={"30px"} onClick={handleMenu} />
                    )
                }
              </ul>
              {
                isMenu &&
                (
                  <ul className='container flex justify-center flex-col fixed top-[5rem] w-[100vw] h-[calc(100vh-5rem)] md:h-[calc(100vh-10rem)] z-[50] bg-white backdrop-blur-[2px] translate-y-[0px]
              delay-[0s] transition-all duration-[0.3s] ease-[ease] items-center list-none font-Sora opacity-80 left-0 '>
                    <Link to="home" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' onClick={handleMenu} ><li className='py-4'>Home</li></Link >
                    <Link to="about" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' onClick={handleMenu} ><li className='py-4'>About</li></Link >
                    <Link to="roadmap" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' ><li className='py-4'>Roadmap</li></Link >
                    <Link to="showcase" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' onClick={handleMenu} ><li className='py-4'>Showcase</li></Link >
                    <Link to="team" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' onClick={handleMenu} ><li className='py-4'>Team</li></Link >
                    <Link to="faq" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' onClick={handleMenu} ><li className='py-4'>FAQ</li></Link >
                    <li className='my-4 cursor-pointer'>
                      <div className='inline-block'>
                        <button className='inline-block bg-black text-white outline-none border-none text-[0.875rem] py-[0.9rem] px-[2.3rem] 
                    rounded-[50px] relative cursor-pointer transition-all duration-[0.2s] ease-[ease] delay-[0s]'>
                          Connect Wallet
                        </button>
                      </div>
                    </li>
                  </ul>
                )
              }
            </div>
          ) : (
            <div className=''>
              <Link to="home" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' >Home</Link >
              <Link to="about" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' >About </Link >
              {/* <Link to="roadmap" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' >Roadmap</Link > */}
              <Link to="showcase" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' >Showcase</Link >
              <Link to="team" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' >Team</Link >
              <Link to="faq" spy={true} smooth={true} duration={800} className='mx-4 cursor-pointer hover:underline' >Faq</Link >
            </div>
          )
        }
        {
          isMobile ? ("")
            : (
              <div>
                <button className='inline-block bg-black text-white outline-none border-none text-[0.875rem] py-[0.9rem] px-[2.3rem] 
                      rounded-[50px] relative cursor-pointer transition-all duration-[0.2s] ease-[ease] delay-[0s]'>
                  Connect Wallet
                </button>
              </div>
            )
        }
      </nav>
    </section>

  )
}

export default Narbar