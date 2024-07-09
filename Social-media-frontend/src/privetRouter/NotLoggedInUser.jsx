import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const NotLoggedInUser = () => {

    const user = useSelector((state)=> state.user.value);
 
  return (
    user ? <Navigate to="/" /> : <Outlet /> 
  )
}

export default NotLoggedInUser