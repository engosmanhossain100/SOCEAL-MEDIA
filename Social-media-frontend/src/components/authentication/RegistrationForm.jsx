import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, useFormik } from 'formik';
import { signUp } from '../../validation';

const initialState = { fName: '', lName: '', email: '', password: '', bMonth: '', bDay: '', bYear: '', gender: ''};

const RegistrationForm = () => {

    const formik = useFormik(() => {
        initialValues = initialState,
        validateYupSchema = signUp,
        onSubmit(() => {
            console.log("hlw Sign Up Success");
        });
    })

    console.log(formik);

  return (
    <div className='w-full rounded-md shadow-md px-11 py-7 box-border '>
        <div>
            <form onSubmit={formik.handleSubmit}> 
            <input type='name' className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='First Name' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.fName} name="fName"  />
            <input type="name" className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='Lirst Name' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.lName} name="lName" />
            <input type='email' className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='emample.@gmail.com' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur}  value={formik.values.email} name="email"/>
            <input type='password' className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='passwoard' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur}  value={formik.values.password} name="password" />

            <div className='flex gap-x-7'>
               <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.bYear}  name="bYear">
                <option>Birthday Year</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
               </select>
               <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.bMonth}  name="bMonth">
                <option>Birthday Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
               </select> 
               <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.bDay}  name="bDay">
                <option>Birthday Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
               </select>
                
            </div>

           <div className='mt-5'>
           <input  id='Male' type='radio' name='gender'onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="Male" />
            <label htmlFor='Male' className='font-gilroyNormal ml-2'>Male</label>
            <input id='Female' type='radio' name='gender' className='ml-5' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="Female" />
            <label htmlFor='Female' className='font-gilroyNormal ml-2'>Female</label>
           </div>

            <div className='flex justify-between items-center mt-4'>
            <button type='submit' className='px-6 py-2 rounded-full border border-primary_color text-primary_color  font-gilroyNormal hover:text-white hover:bg-primary_color '>Submit</button>
            <p className='font-gilroyMedium text-base'>Already have an account <Link to="/" className='text-primary_color underline'>Sing In</Link></p>
            </div>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm