import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftPart from '../HomeComponents/LeftPart'
import Header from '../HomeComponents/PostHome/Header'
import RightHome from '../HomeComponents/RightPart'


const RootLayout = () => {
  return (
    <>
    <div className='mx-5 3xl:mx-20 grid grid-cols-1 lg:grid-cols-[70px,1fr] xl:grid-cols-[100px,3fr,1fr] 2xl:grid-cols-[1fr,3fr,1fr] mt-5 xl:mt-10 gap-x-10'>
    
    <div className='hidden lg:block'><LeftPart /></div>

    <div>
    <div><Header /></div>
    <Outlet />
    </div>
   
    <div className='hidden xl:block'><RightHome /></div>

   </div>
    </>
  )
}

export default RootLayout