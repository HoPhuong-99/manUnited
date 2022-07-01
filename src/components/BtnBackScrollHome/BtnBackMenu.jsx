import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const BtnBackMenu = () => {
  const [btnBackHome, setBtnBackHome] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 ) {
        setBtnBackHome(true)
      }
      else {
        setBtnBackHome(false)
      }
    })
  }, [])


  return (
    <div>
      {
        btnBackHome &&  (
          <Link to="header" spy={true} smooth={true} offset={-100} duration={1000} >
            <div className='container w-[3rem] h-[3rem] box-border m-0 p-0 bg-white hover:bg-black hover:text-white text-[2rem] fixed right-4 bottom-4 cursor-pointer justify-center
              items-center rounded-[50%] flex lg:flex z-50'>
              ↑
            </div></Link>
        )
      }</div>


  )
}

export default BtnBackMenu