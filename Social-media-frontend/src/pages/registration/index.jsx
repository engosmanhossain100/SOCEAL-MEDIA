import React from 'react';
import LeftAuth from '../../components/authentication/LeftAuth';
import { Registrationiconicon } from '../../svg/Registrationiconicon';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import RegistrationForm from '../../components/RegistrationForm';


const Registration = () => {
  return (
   <>
     <ToastContainer /> 
   <Helmet>
    <title>Registration</title>
   </Helmet>

    <div className='relative z-[1]'>

      <div className='hidden lg:block z-[-1] w-[500px] h-[500px] rounded-full absolute -top-[150px] -left-[150px] bg-purple-100 '></div>

      <div className='container flex gap-x-6 justify-center items-center h-screen'>

      <div className='lg:w-[35%] xl:w-[40%] hidden lg:block'>
        <LeftAuth 
        icon = {<Registrationiconicon />}
        titel="Start Your Journey" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut velit adipisci ducimus quis, voluptatem aliquam quam molestiae 
        minima deleniti deserunt nostrum odit, laboriosam omnis, non debitis
          cumque numquam."/>
      </div>  

      <div className='w-full lg:w-[45%] xl:w-[35%]'><RegistrationForm toast={toast}/></div>

      </div>

      </div>
   </>
  )
}

export default Registration