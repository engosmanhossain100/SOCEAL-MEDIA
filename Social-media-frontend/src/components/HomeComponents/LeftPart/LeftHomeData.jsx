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
       <div className={`flex items-center gap-x-4 mb-7 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100 ${ show && "bg-black"}`} onClick={()=>setShow(true)}>

        <div className={`group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}><ItemIcon /></div>

        <div className={`font-gilroyMedium text-base text-black group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}><p>{data.title}</p></div>

        </div>
        <div className='absolute top-10 left-0 ' ref={clickOutSide}>{ show && <SettingOptions /> }</div>
       </div>
        
      :

      <NavLink to={data.to} className='flex items-center gap-x-4 mb-7 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100'>

      <div className='group-hover:text-white transition-all ease-linear duration-100'><ItemIcon /></div>

      <div className='font-gilroyMedium text-base text-black group-hover:text-white transition-all ease-linear duration-100'><p>{data.title}</p></div>

    </NavLink>
    }
    
    </>
  )
}

export default LeftHomeData