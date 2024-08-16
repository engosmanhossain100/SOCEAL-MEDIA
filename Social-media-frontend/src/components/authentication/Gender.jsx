import React from 'react'

const Gender = ({formik, errors , touched}) => {
  return (
    <>
    
    <div className='mt-5'>
           <input  id='Male' type='radio' name='gender'onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="Male" />
            <label htmlFor='Male' className='font-gilroyNormal ml-2'>Male</label>
            <input id='Female' type='radio' name='gender' className='ml-5' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value="Female" />
            <label htmlFor='Female' className='font-gilroyNormal ml-2'>Female</label>
    </div>
           {errors.gender && touched.gender && <p className='font-gilroyNormal text-red text-sm my-2'>{errors.gender}</p>}


    </>
  )
}

export default Gender