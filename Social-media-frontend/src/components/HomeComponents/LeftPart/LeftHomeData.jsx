import React, { useRef, useState } from 'react'
import {NavLink} from "react-router-dom"
import SettingOptions from './SettingOption';
import OutSideClick from '../../../functions/click';


const LeftHomeData = ({data}) => {
 
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, ()=>{
    setShow(false);
  })

  const ItemIcon = data.icon;


  return (
    <>
    
    {
      data.title == "Settings" 

      ?

       <div className='relative'>

       <div className={`flex w-10 h-10 2xl:w-auto 2xl:h-auto justify-center 2xl:justify-normal items-center 2xl:gap-x-4 lg:mb-5 2xl:mb-7 hover:bg-black 2xl:py-3 2xl:px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100 ${ show && "bg-black"}`} onClick={()=>setShow(true)}>
        
        <div className={`group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}><ItemIcon /></div>
        <div className='hidden 2xl:block' ><p className={`font-gilroyMedium text-base 3xl:text-lg text-black group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>{data.title}</p></div>

        </div>

        <div className='absolute top-12 left-2/4 -translate-x-2/4 lg:top-10 lg:left-36' ref={clickOutSide}>{ show && <SettingOptions /> }</div>
        
       </div>
        
      :

        <NavLink to={data.to} className='flex w-10 h-10 2xl:w-auto 2xl:h-auto justify-center 2xl:justify-normal items-center 2xl:gap-x-4 2xl:mb-7 hover:bg-black 2xl:py-3 2xl:px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100'>

        <div className='group-hover:text-white transition-all ease-linear duration-100'><ItemIcon /></div>

        <div className='hidden 2xl:block' ><p className='font-gilroyMedium text-base 3xl:text-lg text-black group-hover:text-white transition-all ease-linear duration-100'>{data.title}</p></div>

      </NavLink>
    }
    
    </>
  )
}

export default LeftHomeData