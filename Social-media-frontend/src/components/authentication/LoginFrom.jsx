import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { signIn } from '../../validation';
import { useLoggedInUserMutation } from '../../../slices/authApi';
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { loggedInUsers } from '../../../slices/userSlices';

const initialState = { 
    email: '',  
    password: '', 
};
  
const LoginFrom = ({toast}) => {

  const [loggedInUser, {isLoading}] = useLoggedInUserMutation();
  const navigate = useNavigate ();
  const dispatch =  useDispatch();

  const loginUser = async () =>{

    const loginMutation = await loggedInUser ({
      email: formik.values.email,
      password: formik.values.password,
    });
    if (loginMutation?.error) {
      toast.error(loginMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return
    }

    // const {message, ...rest} = loginMutation.data; 
    // localStorage.setItem("user", JSON.stringify(rest));
    // dispatch(loggedInUsers(rest))
    // navigate("/")
  
    localStorage.setItem('user', JSON.stringify(loginMutation.data));
    dispatch(loggedInUsers(loginMutation.data));
    navigate("/")                     

  }

    const formik = useFormik({

        initialValues: initialState,
    
        validationSchema: signIn,
    
        onSubmit: () => {
          loginUser();
          formik.resetForm();
        },
        
      });

      const {errors,touched} = formik;

  return (
    <div className='w-full rounded-md shadow-md p-4 lg:px-11 py-7 box-border border border-line_color lg:border-none'>

        <div>
            <form onSubmit={formik.handleSubmit}> 

            <input type='email' className={
                errors.email && touched.email
                ?
                'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none'
                :
                'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            }
            placeholder='emample.@gmail.com' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur}  value={formik.values.email} name="email"/>
           {errors.email && touched.email && <p className='font-gilroyNormal text-red text-sm my-2'>{errors.email}</p>}
           
            <input type='password' className={
                errors.password && touched.password
                ?
                'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none'
                :
                'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            } placeholder='passwoard' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur}  value={formik.values.password} name="password" />
            {errors.password && touched.password && <p className='font-gilroyNormal text-red text-sm my-2'>{errors.password}</p>}

            <div className='sm:flex justify-between items-center mt-4'> 
            {isLoading 
              ?
              <button disabled type='submit' className='px-6 py-2 rounded-full border border-primary_color text-primary_color  font-gilroyNormal hover:text-white hover:bg-primary_color '><BiLoaderAlt /></button> 
              :
              <button type='submit' className='px-6 py-2 rounded-full border border-primary_color text-primary_color  font-gilroyNormal hover:text-white hover:bg-primary_color '>Login</button> 
            }
            <p className='font-gilroyMedium text-base xl:text-sm 2xl:text-base mt-5 sm:mt-0'>Dont have an account?<Link to="/registration" className='text-primary_color underline'>Sing In</Link></p>
            </div>

            </form>
        </div>

    </div>
  )
}

export default LoginFrom