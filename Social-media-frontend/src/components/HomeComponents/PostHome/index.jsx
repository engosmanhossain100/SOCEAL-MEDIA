import React from 'react'
import Header from './Header'
import { LiveIcon } from '../../../svg/Live'
import { Media } from '../../../svg/Media'

const PostHome = () => {
  return (
    <>
    <div className='mt-10 py-10 px-6 bg-white-100 rounded-md '>
      
      <div className='flex items-center gap-x-3 w-full p-2 bg-white rounded-full mb-6'>
        <div className='w-12 h-12 rounded-full bg-white-100'></div>
        <input type='text' placeholder='say something' className='focus:outline-none w-[95%]' />
      </div>

      <div className='border-t-2 border-line_color'>
       <div className='mt-7 flex gap-x-7 items-center justify-around '>

       <div className='w-[33%] flex items-center gap-x-3 mt-4'>
          <LiveIcon />
          <span className='font-gilroyMedium text-black'>Live Video</span>
        </div>

        <div className='w-[33%] flex items-center gap-x-3 mt-4'>
          <Media />
          <span className='font-gilroyMedium text-black'>Image/Gallary</span>
        </div>

        <div className='w-[33%] flex items-center gap-x-3 mt-4'>
          <LiveIcon />
          <span className='font-gilroyMedium text-black'>Actives</span>
        </div>
       </div>
          
        <div></div>

      </div>

    </div>
    </>
  )
}

export default PostHome