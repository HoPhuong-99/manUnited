import React from 'react'
import './Roadmap.css'

const RoadMap = () => {
  
  // let path = document.querySelector('path');
  // let pathLength = path.getTotalLength();
  // path.style.strokeDasharray = pathLength + ' ' + pathLength;
  // path.style.strokeDashoffset = pathLength;

  // window.addEventListener("scroll" , () => {
  //   const scrollPrercentage = (document.documentElement.scrollTop + document.body.scrollTop)
  //   const drawLength = pathLength * scrollPrercentage
  //   path.style.strokeDashoffset = pathLength - drawLength
  // })
  
  return (
    <section className='w-[100vw] flex flex-col justify-center min-h-screen bg-white' id='roadmap'>
      <div className='flex justify-center'>
        <h1 className='text-[3rem] font-AkayaTelivigala font-bold capitalize my-[1rem] border-b-2 border-solid w-fit border-black'>
          RoadMap
        </h1>
      </div>
      <div className='w-[100%] flex justify-center'>
        <div className='relative w-[90%] h-[200vh] flex justify-end items-center flex-col'>
          <div className=' flex justify-center items-center z-10'>
            <div className=' container absolute left-4 translate-x-[-50%] lg:translate-x-[0] w-[100%] h-[100%] overflow-hidden top-0'>
              <svg viewBox="0 0 52 2047" fill="none" className='inline-block w-[100%] h-[100%]'>
                <path strokeWidth="6px" d="M26 0V314C12 314 1 326 1 339C1 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 1344.81 26 1346 26 1363C26 1380 26 1670 26 1670V1678.5C12.5 1678.5 1 1687.5 1 1703C1 1718.5 14 1727.5 26 1727.5C38 1727.5 50.5 1719 50.5 1703C50.5 1687 26 1687 26 1703C26 1719 26 2049 26 2049" stroke="black">
                  </path></svg>
              {/* <svg viewBox="0 0 52 2047" fill="none" class="inline-block w-[100%] h-[100%]"
              ><path strokeWidth="6px" d="M26 0V314C12 314 1 326 1 339C1 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 1344.81 26 1346 26 1363C26 1380 26 1670 26 1670V1678.5C12.5 1678.5 1 1687.5 1 1703C1 1718.5 14 1727.5 26 1727.5C38 1727.5 50.5 1719 50.5 1703C50.5 1687 26 1687 26 1703C26 1719 26 2049 26 2049" stroke="black" style={{strokeDasharray: 0 , strokeDashoffset: 1238.67}}>
              </path></svg> */}
            </div>
          </div>
          <ul className='w-[90%] h-[100%] flex justify-center flex-col items-center z-20'>
            <li className='li-roadmap'>
            </li>
            <li className='li-roadmap lg:justify-end'>
              <div className='div-content-roadmap div-roadMap'>
                <p className='p-content-roadmap'>
                  <span className='title-content-roadmap'>
                    Grand Opening
                  </span>
                  <span className='body-conten-roadmap'>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
                  </span>
                </p>
              </div>
            </li>
            <li className='li-roadmap lg:justify-start'>
              <div className='div-content-roadmap div-roadMap'>
                <p className='p-content-roadmap'>
                  <span className='title-content-roadmap'>
                    History
                  </span>
                  <span className='body-conten-roadmap'>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
                  </span>
                </p>
              </div>
            </li>
            <li className='li-roadmap lg:justify-end'>
              <div className='div-content-roadmap div-roadMap'>
                <p className='p-content-roadmap'>
                  <span className='title-content-roadmap'>
                    History
                  </span>
                  <span className='body-conten-roadmap'>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
                  </span>
                </p>
              </div>
            </li>
            <li className='li-roadmap lg:justify-start'>
              <div className='div-content-roadmap div-roadMap'>
                <p className='p-content-roadmap'>
                  <span className='title-content-roadmap'>
                    History
                  </span>
                  <span className='body-conten-roadmap'>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
                  </span>
                </p>
              </div>
            </li>
            <li className='li-roadmap lg:justify-end'>
              <div className='div-content-roadmap div-roadMap'>
                <p className='p-content-roadmap'>
                  <span className='title-content-roadmap'>
                    History
                  </span>
                  <span className='body-conten-roadmap'>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RoadMap