import React, { useRef, useState } from 'react'
import { SearchIcon } from '../../../../svg/SearchIcon';
import SearchBox from './SearchBox';
import OutSideClick from '../../../../functions/click';


const Header = () => {

  const [show , SetShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    SetShow(false);
  });
 
  return (
    <>
    
    <div className='flex items-center justify-between'>

    <div >
      <h4 className='font-gilroyBold text-2xl text-black '>Feeds</h4>
    </div>

   <div className='w-[30%] relative'>

   <div className='flex justify-center gap-x-3 bg-white-100 border border-secondary_color py-[10px] px-4 rounded-full' onClick={()=>SetShow(true)}>
        <div className='text-secondary_color cursor-pointer'><SearchIcon /></div>
        <div><input type="text" placeholder='Search' className='focus:outline-none font-gilroyNormal text-base '/></div>
    </div>

    <div className='absolute -top-5 left-[-27px]' ref={clickOutSide}>
      {
        show && <SearchBox />
      }
      </div>

   </div>
  
    </div>
    
    </>
  )
};

export default Header