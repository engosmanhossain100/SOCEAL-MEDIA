import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftPart from '../HomeComponents/LeftPart'
import Header from '../HomeComponents/PostHome/Header'
import RightHome from '../HomeComponents/RightPart'


const RootLayout = () => {
  return (
    <>
    <div className='mx-5 lg:mx-20 grid grid-cols-1 lg:grid-cols-[1fr,3fr,1fr] mt-5 lg:mt-10 gap-x-10'>
    
    <div className='hidden lg:block'><LeftPart /></div>

    <div>
    <div><Header /></div>
    <Outlet />
    </div>
   
    <div className='hidden lg:block'><RightHome /></div>

   </div>
    </>
  )
}

export default RootLayout