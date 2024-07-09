import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from '../pages/login';


const LoggedInUser = () => {

    const user = useSelector((state)=> state.user.value);

  return (
    user ? <Outlet /> : <Login />
  )
}

export default LoggedInUser