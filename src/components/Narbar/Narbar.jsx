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
            <div className='absolute left-[50%] flex justify-center'>
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
                  <ul className='flex justify-center flex-col fixed top-[5rem] w-[100vw] h-[calc(100vh-5rem)] z-[50] bg-white backdrop-blur-[2px] translate-y-[0px]
              delay-[0s] transition-all duration-[0.3s] ease-[ease] items-center list-none font-Sora opacity-80 '>
                    <li className='py-4'>Home</li>
                    <li className='py-4'>About</li>
                    <li className='py-4'>Roadmap</li>
                    <li className='py-4'>Showcase</li>
                    <li className='py-4'>Team</li>
                    <li className='py-4'>Fag</li>
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
              <Link to="home" spy={true} smooth={true}  duration={500} className='mx-4' >Home</Link >
              <Link to="about" spy={true} smooth={true}  duration={500} className='mx-4' >About </Link >
              <Link to="roadmap" spy={true} smooth={true}  duration={500} className='mx-4' >Roadmap</Link >
              <Link to="showcase" spy={true} smooth={true}  duration={500} className='mx-4' >Showcase</Link >
              <Link to="team" spy={true} smooth={true}  duration={500} className='mx-4' >Team</Link >
              <Link to="faq" spy={true} smooth={true}  duration={500} className='mx-4' >Faq</Link >
            </div>
          )
        }
        <div>
          <button className='inline-block bg-black text-white outline-none border-none text-[0.875rem] py-[0.9rem] px-[2.3rem] 
                    rounded-[50px] relative cursor-pointer transition-all duration-[0.2s] ease-[ease] delay-[0s]'>
            Connect Wallet
          </button>
        </div>

      </nav>
    </section>

  )
}

export default Narbar