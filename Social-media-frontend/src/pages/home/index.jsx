import React from 'react'
import { Helmet } from 'react-helmet-async';
import LeftPart from '../../components/HomeComponents/LeftPart';
import PostHome from '../../components/HomeComponents/PostHome';

const Home = () => {

  return (
   <>
    <Helmet>
    <title>Login</title>
   </Helmet>

   <PostHome />

   </>
 
  )
}

export default Home