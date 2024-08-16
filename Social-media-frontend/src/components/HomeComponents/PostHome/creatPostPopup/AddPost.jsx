import React from 'react'
import { Media } from '../../../../svg/Media'
import { LiveIcon } from '../../../../svg/Live'
import { CircleProfileIcon } from '../../../../svg/Circleprofile'

const AddPost = ({setShow, show}) => {
  return (
    <div className='px-2 py-1 border border-line_color rounded-md flex items-center justify-between'>
       
      <span className='font-gilroySemiBold text-base text-black'>Add to your Post</span>
        
      <div className='flex items-center gap-x-3'>
        
       <div>
            <div className={`'w-10 h-10 rounded-full hover:bg-white-100 cursor-pointer transition-all ease-linear duration-100 flex items-center justify-center'${show && `w-10 h-10 bg-white-100`}`} onClick={()=>setShow(true)}><Media /></div>
        
        </div>

        <div>
            <div className='w-10 h-10 rounded-full hover:bg-white-100 cursor-pointer transition-all ease-linear duration-100 flex items-center justify-center'><LiveIcon /></div>
        
        </div>

        <div>
            <div className='w-10 h-10 rounded-full hover:bg-white-100 cursor-pointer transition-all ease-linear duration-100 flex items-center justify-center'><CircleProfileIcon /></div>
        
        </div>

      </div>

    </div>
  )
}

export default AddPost