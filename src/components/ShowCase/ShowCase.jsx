import React from 'react'
import img1 from '../../assets/mobile/showcasse/ronaldo.png'
import img2 from '../../assets/mobile/showcasse/cavani.png'
import img3 from '../../assets/mobile/showcasse/rasford.png'
import img4 from '../../assets/mobile/showcasse/sancho.png'
import img5 from '../../assets/mobile/showcasse/bruno.png'
import img6 from '../../assets/mobile/showcasse/pogba.png'
import img7 from '../../assets/mobile/showcasse/debeak.png'
import img8 from '../../assets/mobile/showcasse/bisaka.png'
import img9 from '../../assets/mobile/showcasse/margure.png'
import img10 from '../../assets/mobile/showcasse/shaw.png'
import img11 from '../../assets/mobile/showcasse/degea.png'

const ShowCase = () => {
  return (
    <section className='w-[100vw] min-h-screen bg-black flex  flex-col justify-center items-center relative overflow-hidden' id="showcase">
      <div className='whitespace-nowrap box-content my-[2rem] flex animation-div animate-pulse'>
        <div className="element-showcase">
          <img src={img1} alt='ronaldo' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                C.Ronaldo
              </span>
              <br />
              <h1 className='h1-information'>
                #7
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                ST
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img2} alt='cavani' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                E.Cavani
              </span>
              <br />
              <h1 className='h1-information'>
                #22
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                ST
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img3} alt='rasford' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                M.Rasford
              </span>
              <br />
              <h1 className='h1-information'>
                #10
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                LW
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img4} alt='sancho' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                J.Sancho
              </span>
              <br />
              <h1 className='h1-information'>
                #25
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                RW
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img5} alt='bruno' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                B.Fernandes
              </span>
              <br />
              <h1 className='h1-information'>
                #18
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                CAM
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img6} alt='pogba' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                P.Pogba
              </span>
              <br />
              <h1 className='h1-information'>
                #6
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                CM
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='whitespace-nowrap box-content my-[2rem] flex animation-div animate-pulse'>
        <div className="element-showcase">
          <img src={img7} alt='debeak' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
               D.Beak
              </span>
              <br />
              <h1 className='h1-information'>
                #33
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                CM
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img8} alt='saka' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                W.Bisaka
              </span>
              <br />
              <h1 className='h1-information'>
                #29
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                RB
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img9} alt='maguire' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                H.Maruige
              </span>
              <br />
              <h1 className='h1-information'>
                #5
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                CB
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img10} alt='shaw' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                L.Shaw
              </span>
              <br />
              <h1 className='h1-information'>
                #35
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                LB
              </h1>
            </div>
          </div>
        </div>
        <div className="element-showcase">
          <img src={img11} alt='gea' className='border-none' />
          <div className='information'>
            <div>
              <span className='span-information'>
                D.Gea
              </span>
              <br />
              <h1 className='h1-information'>
                #1
              </h1>
            </div>
            <div>
              <span className='span-information'>
                Position
              </span>
              <h1 className='h1-information'>
                GK
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowCase