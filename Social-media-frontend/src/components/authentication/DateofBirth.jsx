import React from 'react'

const DateofBirth = ({formik,years,month,getDates,ageError}) => {
  return (
    <>
    
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
                  getDates.map((date,i)=>(
                    <option key={i}>{date}</option>
                  ))
                }
               </select>
                
            </div>

            { ageError && <p className='font-gilroyNormal text-red text-sm my-2'>{ageError}</p> }

    </>
  )
}

export default DateofBirth