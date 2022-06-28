import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Content = ({ title, content, handleShow, showSpan }) => {
  return (
    <div className="content ">
      <div className="w-[90%] self-center">
        <div className='cursor-pointer px-2 py-4 flex flex-col border-solid border-b-[1px] border-white' onClick={() => { handleShow() }} >
          <div className='text-[0.875rem] flex justify-between items-center '>
            <div className='font-Sora flex items-center text-white'>
              <span>{title}</span>
            </div>
            <span className=' text-white flex justify-center items-center'>
              {
                showSpan ? (<>
                  <AiOutlineMinus size={"1rem"} />
                </>)
                  : (<><AiOutlinePlus size={"1rem"} /></>)
              }
            </span>
          </div>
          <div className='text-gray-500 text-[0.875rem] font-Sora font-light' >
            {
              showSpan ?
                (<>
                  <div className='text-gray-500 text-[0.875rem] font-Sora font-light mt-4' >
                    {content}
                  </div>
                </>) : ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content