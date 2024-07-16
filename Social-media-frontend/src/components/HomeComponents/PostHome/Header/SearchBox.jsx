import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../../../svg/SearchIcon'

const SearchBox = () => {

  const [iconVisible, setIconVisible] = useState(true);
  const inputBox = useRef(null);

  useEffect (()=>{
    inputBox.current.focus();
  },[])

  return (

    <div className='-top-5 left-[-27px] w-[360px] p-7 bg-white shadow-md rounded-md min-h-[400px] max-h-[70vh]'>
   
    <div className='flex items-center gap-x-3 border border-secondary_color py-[10px] px-4 rounded-full'>

        {
          iconVisible && <div className='text-secondary_color cursor-pointer' onClick={()=> inputBox.current.focus()}><SearchIcon /></div>
        }
        
        <div>
          <input ref={inputBox} type="text" placeholder='Search' className='focus:outline-none font-gilroyNormal text-base' onFocus={()=>setIconVisible(false)} onBlur={()=>setIconVisible(true)} />
        </div>

    </div>

    <div className='mt-3'>
      <p className='font-gilroyBold text-black text-sm'>Recent Searches</p>
    </div>

    </div>
  )
}

export default SearchBox