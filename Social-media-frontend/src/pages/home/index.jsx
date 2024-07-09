import React from 'react'
import { Helmet } from 'react-helmet-async';

const Home = () => {

  return (
   <>
    <Helmet>
    <title>Login</title>
   </Helmet>

   <div className='grid grid-cols-[1fr,3fr,1fr}'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
   </div>

   </>
 
  )
}

export default Home