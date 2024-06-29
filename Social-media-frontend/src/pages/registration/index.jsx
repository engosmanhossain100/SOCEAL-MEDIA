import React from 'react';
import LeftAuth from '../../components/authentication/LeftAuth';
import { Registrationiconicon } from '../../svg/Registrationiconicon';
import RegistrationForm from '../../components/authentication/RegistrationForm';

const Registration = () => {
  return (

    <div className='relative'>

      <div className='w-[500px] h-[500px] rounded-full absolute -top-[150px] -left-[150px] bg-purple-100 '></div>
      
      <div className='container flex gap-x-6 justify-center items-center h-screen'>
     
      <div className='w-[45%]'>
        <LeftAuth 
        icon = {<Registrationiconicon />}
        titel="Start Your Journey" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ut velit adipisci ducimus quis, voluptatem aliquam quam molestiae 
         minima deleniti deserunt nostrum odit, laboriosam omnis, non debitis
          cumque numquam."/></div>  
      <div className='w-[45%]'><RegistrationForm /></div>
   
    </div>

    </div>

  )
}

export default Registration