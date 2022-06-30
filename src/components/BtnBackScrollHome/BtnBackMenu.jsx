import React from 'react'
import { Link } from 'react-scroll'

const BtnBackMenu = () => {
  return (
    <Link to="header" spy={true} smooth={true} offset={-100} duration={1000} >
      <div className='container hidden w-[3rem] h-[3rem] box-border m-0 p-0 bg-white text-[2rem] fixed right-4 bottom-4 cursor-pointer justify-center
    items-center rounded-[50%] lg:flex'>
        ↑
      </div></Link>

  )
}

export default BtnBackMenu