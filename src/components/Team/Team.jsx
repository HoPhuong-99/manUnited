import React, { useEffect, useRef, useState } from 'react'
import Confetti from "react-confetti"
import ronaldo from '../../assets/mobile/showcasse/ronaldo.png'
import sancho from '../../assets/mobile/showcasse/sancho.png'
import degea from '../../assets/mobile/showcasse/degea.png'
import varane from '../../assets/mobile/showcasse/varane.png'

const Team = () => {
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const confettiRef = useRef(null)

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  return (
    <section className='relative w-[100vw] flex flex-col justify-center min-h-screen bg-white' id='team' ref={confettiRef}>
      <Confetti
        className='absolute w-[100%] h-[100%] z-0'
        numberOfPieces={80}
        width={width}
        height={height}
      />
      <div className='flex justify-center z-10'>
        <h1 className='text-[3rem] font-AkayaTelivigala font-bold capitalize my-[1rem] border-b-2 border-solid w-fit border-black'>
          Man Of SeaSon
        </h1>
      </div>
      <div className='w-[100%] flex justify-center'>
        <div className='w-[90%] justify-center my-8 flex items-center flex-wrap z-10 bg-white'>
          <div className="div-inforTeam">
            <div className='w-[100%] flex justify-center'>
            <div className="div-imgTeam">
              <img src={ronaldo} alt='debeak' className='border-none' />
            </div>
            </div>
            <h2 className='h2-name'>
              C.ronaldo
            </h2>
            <h2 className='h2-achievements'>
              Top Goal : 24 goal
            </h2>
          </div>
          <div className="div-inforTeam">
            <div className='w-[100%] flex justify-center'>
            <div className="div-imgTeam">
              <img src={sancho} alt='sancho' className='border-none' />
            </div>
            </div>
            <h2 className='h2-name'>
              J.Sancho
            </h2>
            <h2 className='h2-achievements'>
              Top Assist : 15 assist
            </h2>
          </div>
          <div className="div-inforTeam">
            <div className='w-[100%] flex justify-center'>
            <div className="div-imgTeam">
              <img src={varane} alt='varane' className='border-none' />
            </div>
            </div>
            <h2 className='h2-name'>
              R.Varane
            </h2>
            <h2 className='h2-achievements'>
              Top Defense : 120 intercept
            </h2>
          </div>
          <div className="div-inforTeam">
            <div className='w-[100%] flex justify-center'>
            <div className="div-imgTeam">
              <img src={degea} alt='degea' className='border-none' />
            </div>
            </div>
            <h2 className='h2-name'>
              D.Gea
            </h2>
            <h2 className='h2-achievements'>
              Top Save The Goal : 40 goal
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team