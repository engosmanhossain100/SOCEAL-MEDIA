import React from 'react'
import { CircleCloseIcon } from '../../../../svg/CircleClose'

const CreatPostPopup = () => {
  return (
    <div className='absolute top-0 left-0 w-full bg-blur h-screen z-20 flex justify-center items-center'>
        <div className=' w-2/5 bg-white shadow-md'>

        <div className='border-b border-white-100 p-2'>
            <h3 className='font-gilroyBold text-lg text-black text-center'>creat post</h3>
            <div className='absolute top-1 right-2 text-secondary_color cursor-pointer'><CircleCloseIcon /></div>
        </div>

        <div className='px-3 py-4'>

            <div className='flex items-center gap-x-3'>
            <div className='w-12 h-12 rounded-full bg-white-100'></div>
            <h4 className='font-gilroyBold text-base'>One year Accdamey</h4>
            </div>
            
        </div>

        <div className='mt-5'> 
            <textarea placeholder='whats up say something' className='w-full min-h-24 outline-none p-2 font-base font-gilroyMedium'/>
        </div>

        </div>
    </div>
  )
}

export default CreatPostPopup