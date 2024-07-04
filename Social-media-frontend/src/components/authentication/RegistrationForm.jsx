import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUp } from '../../validation';

const initialState = { fName: '', lName: '', email: '', password: '', bMonth: new Date().getMonth() + 1 , bDay: new Date().getDate(), bYear: new Date().getFullYear(), gender: ''};

const RegistrationForm = () => {

    const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      const [ageError, SetAgeError] = useState("");
      const currentDate = new Date();
      const picked_Date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      );
      const adult = new date (1970 + 18 + 0, 1);
      const tooold = new date (1970 + 70 + 0, 1);
      if(currentDate - picked_Date < adult) {
        return SetAgeError ("under your age 18");
      }else if (currentDate - picked_Date > tooold) {
        return SetAgeError ("You are more than 70");
      }
    },
    
  });


const tempYears =  new Date().getFullYear()
const years = Array.from(new Array(105),(val, index) => tempYears - index);
const month = Array.from(new Array(12),(val, index) => 1 + index);
const day = () =>{
  return new date(formik.values.bYear, formik.values.bMonth, 0).getDate(); 
}
const getDate = Array.from(new Array(day()),(val, index) => 1 + index);

const {errors,touched} = formik

  return (
    <div className='w-full rounded-md shadow-md p-4 lg:px-11 py-7 box-border border border-line_color lg:border-none'>

        <div>
            <form onSubmit={formik.handleSubmit}> 

            <input type='name' className={
                errors.fName && touched.fName
                ?
                'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none'
                :
                'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            } placeholder='First Name' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.fName} name="fName"  />
            {errors.fName && touched.fName && <p className='font-gilroyNormal text-red text-sm my-2'>{errors.fName}</p>}


            <input type="name" className={
                errors.fName && touched.lName
                ?
                'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none'
                :
                'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            }
            placeholder='Lirst Name' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.lName} name="lName" />
            {errors.fName && touched.lName &&  <p className='font-gilroyNormal text-red text-sm my-2'>{errors.lName}</p>}
            

            <input type='email' className={
                errors.fName && touched.email
                ?
                'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none'
                :
                'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            }
            placeholder='emample.@gmail.com' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur}  value={formik.values.email} name="email"/>
           {errors.fName && touched.email && <p className='font-gilroyNormal text-red text-sm my-2'>{errors.email}</p>}
           
           
            <input type='password' className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='passwoard' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur}  value={formik.values.password} name="password" />

            <div className='flex gap-x-1 lg:gap-x-7'>
               <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.bYear}  name="bYear">
                <option>Year</option>
                {
                  years.map((year,i)=>(
                    <option key={i}>{year}</option>
                  ))
                }
               </select>
               <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.bMonth}  name="bMonth">
                <option>Month</option>
                {
                  month.map((month,i)=>(
                    <option key={i}>{month}</option>
                  ))
                }
               </select> 
               <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.bDay}  name="bDay">
                <option>Day</option>
                {
                  getDate.map((date,i)=>(
                    <option key={i}>{date}</option>
                  ))
                }
               </select>
                
            </div>

            { ageError && <p className='font-gilroyNormal text-red text-sm my-2'>{ageError}</p> }

           <div className='mt-5'>
           <input  id='Male' type='radio' name='gender'onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="Male" />
            <label htmlFor='Male' className='font-gilroyNormal ml-2'>Male</label>
            <input id='Female' type='radio' name='gender' className='ml-5' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="Female" />
            <label htmlFor='Female' className='font-gilroyNormal ml-2'>Female</label>
           </div>
           {errors.gender && touched.gender && <p className='font-gilroyNormal text-red text-sm my-2'>{errors.gender}</p>}

            <div className='sm:flex justify-between items-center mt-4'>
            <button type='submit' className='px-6 py-2 rounded-full border border-primary_color text-primary_color  font-gilroyNormal hover:text-white hover:bg-primary_color '>Submit</button>
            <p className='font-gilroyMedium text-base xl:text-sm 2xl:text-base mt-5 sm:mt-0'>Already have an account <Link to="/" className='text-primary_color underline'>Sing In</Link></p>
            </div>
            </form>
        </div>

    </div>
  )
}

export default RegistrationForm