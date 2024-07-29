import React, { useRef, useState } from 'react'
import { SearchIcon } from '../../../../svg/SearchIcon';
import SearchBox from './SearchBox';
import OutSideClick from '../../../../functions/click';
import { LeftData } from '../../LeftPart/Data';
import { Link } from "react-router-dom";


const Header = () => {

  const [show , SetShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    SetShow(false);
  });
 
  return (
    <>
    
    <div className='flex items-center justify-between'>

    <div className='w-[20%]'>
      <h4 className='font-gilroyBold text-2xl text-black hidden lg:block '>Feeds</h4>
      <div className='lg:hidden w-28 h-28 rounded-full bg-cyan-100 mx-auto'></div>
    </div>

    <div className='lg:hidden flex gap-x-3 items-center justify-center gap-x-4 w-[50%]'>
      {
        LeftData.map((data, inedx)=>{
          const ItemIcom = data.icon;
          return (
            <Link to={data.to}>
             <ItemIcom />
            </Link>
          )
        })
      }
    </div>

    <div className='w-[20%] lg:w-[30%] relative '>

    <div className='flex ml-auto lg:ml-0 w-11 h-11 lg:w-full lg:h-auto justify-center gap-x-3 bg-white-100 border border-secondary_color py-[10px] px-4 rounded-full' onClick={()=>SetShow(true)}>
          <div className='text-secondary_color cursor-pointer'><SearchIcon /></div>
          <div className='hidden lg:block'><input type="text" placeholder='Search' className='focus:outline-none font-gilroyNormal text-base w-full'/></div>
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