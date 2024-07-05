import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUp } from '../validation';
import Gender from './authentication/Gender';
import { useAddUserMutation } from '../../slices/authApi';
import DateofBirth from './authentication/DateofBirth';


const initialState = { 
  fName: '', 
  lName: '', 
  email: '', 
  userName: '', 
  password: '', 
  bMonth: new Date().getMonth() + 1 , 
  bDay: new Date().getDate(), 
  bYear: new Date().getFullYear(), 
  gender: ''};

const RegistrationForm = ({toast}) => {

  const [ageError, SetAgeError] = useState("");
  const [addUser, {isLoading}] = useAddUserMutation();

  const registration = async () => {
    const singUpMutation = await addUser({
      fName: formik.values.fName, 
      lName: formik.values.lName, 
      userName: formik.values.userName, 
      email: formik.values.email, 
      password: formik.values.password, 
      bMonth: formik.values.bMonth, 
      bDay:formik.values.bDay, 
      bYear: formik.values.bYear, 
      gender: formik.values.gender,
    });
    if (singUpMutation?.data) {
      toast.success(singUpMutation?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else if (singUpMutation?.error) {
      toast.error(singUpMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

        });
    }
  };

  const formik = useFormik({

    initialValues: initialState,

    validationSchema: signUp,

    onSubmit: () => {
      const currentDate = new Date();
      const picked_Date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      );
      const adult = new Date (1970 + 18 + 0, 1);
      const tooold = new Date (1970 + 70 + 0, 1);
      if(currentDate - picked_Date < adult) {
        return SetAgeError ("under your age 18");
      }else if (currentDate - picked_Date > tooold) {
        return SetAgeError ("You are more than 70");
      }
      registration();
    },
    
  });


const tempYears =  new Date().getFullYear()
const years = Array.from(new Array(105),(val, index) => tempYears - index);
const month = Array.from(new Array(12),(val, index) => 1 + index);
const day = () =>{
  return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate(); 
}
const getDates = Array.from(new Array(day()),(val, index) => 1 + index);

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
                errors.lName && touched.lName
                ?
                'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none'
                :
                'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            }
            placeholder='Lirst Name' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.lName} name="lName" />
            {errors.lName && touched.lName &&  <p className='font-gilroyNormal text-red text-sm my-2'>{errors.lName}</p>}
            

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


            <DateofBirth formik={formik}  years={years} month={month} getDates={getDates} ageError={ageError} />

            <Gender formik={formik} errors={errors} touched={touched} />

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