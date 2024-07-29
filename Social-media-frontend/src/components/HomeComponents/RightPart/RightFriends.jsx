import React from 'react'
import { Link } from 'react-router-dom'
import { RedusText } from '../../../functions/RedusText'

const RightFriends = () => {

    const originalName = "yana Hossainaaanaa";
    const redusText = RedusText(originalName, 15)

  return (
    <>
    <div>

        <div className='flex items-center justify-between mb-10'>
           
            <div>
                <h4 className='font-gilroyBold text-lg text-black'>Friend Request</h4>
            </div>

            <div>
                <Link to="/friends" className='text-base font-gilroyMedium py-2 px-4 text-black rounded-full hover:bg-black hover:text-white border border-black transition ease-linear duration-100'>
                See All
                </Link>
            </div>
        </div>

        <div className='flex items-center gap-x-3 mb-4'>

            <div className='w-3/6 flex items-center gap-x-3 '>

                <div className='w-10 h-10 bg-secondary_color rounded-full'>
                </div>

                <div className='w-[62%]'>
                    <h5 className='font-gilroyBold text-sm text-black leading-none '>{redusText}</h5>
                    <span className='font-gilroyLight text-xs text-secondary_color'>2 hours ago</span>
                </div>

            </div>

            <div className='w-3/6 flex items-center gap-x-2'>
                    <button className='px-4 py-2 bg-black text-sm rounded-full text-white font-gilroyNormal'>Accept</button>
                    <button className='px-4 py-2 bg-red text-sm rounded-full text-white font-gilroyNormal'>Reject</button>
             </div>

        </div>
        


    </div>
    </>
  )
}

export default RightFriends