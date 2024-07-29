import React from 'react'
import { Moon } from '../../../../svg/Moon';
import { BackIcon } from '../../../../svg/BackIcon';

const DisplayMode = ({setVisible}) => {
  return (
    <>
    <div className='bg-white w-[300px] shadow-md rounded-md p-4'>
        
      <div className='flex items-center gap-x-5 mb-4'>

        <div className='hover:text-secondary_color cursor-pointer transition-all ease-linear duration-75' onClick={()=>setVisible(false)}><BackIcon /></div>
        <div>
        <h4 className='font-gilroyBold text-lg text-black '>
        {" "}
        Display & Accessability
        </h4>
        </div>

      </div>
    
      <div className='flex justify-between gap-x-4'>

          <div className='w-10 h-10 rounded-full bg-white-100 flex items-center justify-center'>
              <Moon />
              </div>

          <div className='w-4/5'>

              <h4 className='font-gilroyBold text-base text-black'>Dark Mode</h4>
              <p className='font-gilroyNormal text-sm text-secondary_color'>la aasdrqaewr qawedasasd asdasdasdasdasdqwedw qqawed asd dasd asd asd</p>

        <div>
        <div className='flex justify-between items-center mb-3'>
          {" "}
        <label htmlFor='white' className='font-gilroyMedium text-sm text-black'>Off</label> 
        <input id="white"  name='DarkMode' type='radio' /> 
        </div>

        <div className='flex justify-between items-center'>
        <label htmlFor='dark' className='font-gilroyMedium text-sm text-black'>On</label> 
        <input id='dark' name='DarkMode'  type='radio' /> 
        </div>
        </div>

          </div>

      </div>

    </div> 
    </>
  )
}

export default DisplayMode;