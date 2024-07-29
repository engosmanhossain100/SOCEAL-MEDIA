import React from 'react'
import { storiesData } from './storiesData'
import { Swiper, SwiperSlide } from 'swiper/react';


const Stories = () => {
  return (
    <>
    <div className='mb-5'>
    <h4 className='font-gilroyBold text-lg text-black'>stories</h4>
    </div>
    
    {/* <div className='flex items-center justify-between gap-x-2'>
        
    </div> */}

<div className='w-[332px]'>
<Swiper spaceBetween={10} slidesPerView={3}>
{storiesData.map((data, index)=>(
            <SwiperSlide key={index} style={{background: `url(${data.bgPicture})`}} className='bg-cover bg-no-repeat bg-center h-[200px] roun'>
                <div className='w-8 h-8 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-primary_bg'><img src={data.picture}></img></div>
            </SwiperSlide>
        ))}
    </Swiper>
</div>

    </>
  )
}

export default Stories