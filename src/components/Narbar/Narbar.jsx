import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineMenu } from 'react-icons/ai'

export const Narbar = () => {
  const [isMenu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!isMenu)
  }

  return (
    <section className='w-[100%] h-[80px] flex items-center justify-center' id='navigation'>
      <nav className='w-[85%] h-[80px] flex items-center'>
        <h1 className="absolute font-AkayaTelivigala text-4xl text-red-600 cursor-pointer font-bold">
          <a href="https://www.manutd.com/">MUT.</a>
        </h1>
        <div className='absolute left-[50%] '>
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
          {/* {
            isMenu &&
            (
              <ul className='z-50 text-red-600'>
                <li>Home</li>
                <li>About</li>
                <li>Roadmap</li>
                <li>Showcase</li>
                <li>Team</li>
                <li>Fag</li>
              </ul>

            )
          } */}
        </div>
      </nav>
    </section>

  )
}

export default Narbar