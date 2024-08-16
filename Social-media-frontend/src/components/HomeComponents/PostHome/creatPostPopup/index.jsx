import React, { useEffect, useRef, useState } from 'react'
import { CircleCloseIcon } from '../../../../svg/CircleClose'
import AddPost from './AddPost';
import EmojiPickers from './EmojiPickers';
import ImageViewer from './ImageViewer';



const CreatPostPopup = () => {

  const [text, setText] = useState('');
  const [show , setShow] = useState(false);
  const [image , setImage] = useState([]);
  const textRef = useRef(null);


  return (
    <div className='absolute top-0 left-0 w-full bg-blur h-screen z-20 flex justify-center items-center'>
        <div className=' w-[30%] bg-white shadow-md'>

        <div className='relative border-b border-white-100 p-2'>
            <h3 className='font-gilroyBold text-lg text-black text-center'>creat post</h3>
            <div className='absolute top-1 right-2 text-secondary_color cursor-pointer'><CircleCloseIcon /></div>
        </div>

        <div className='px-3 py-4'>

            <div className='flex items-center gap-x-3'>
            <div className='w-12 h-12 rounded-full bg-white-100'></div>
            <h4 className='font-gilroyBold text-base'>One year Accdamey</h4>
            </div>
          
            <div>

              {
                !show 
                ?
                <>
                <EmojiPickers text={text} setText={setText} textRef={textRef} />
                </>
                :
                <>
                <ImageViewer text={text} setText={setText} textRef={textRef} image={image} setImage={setImage} setShow={setShow}/>
                </>
                
              }
              </div>

            <div><AddPost show={show} setShow={setShow}/></div>

            <div className='mt-3'>
              <button className='w-full bg-white-100 text-black hover:text-white hover:bg-black transition-all ease-linear duration-100 p-2 font-gilroySemiBold text-base rounded-md'>Post</button>
            </div>

        </div>
        
        </div>
    </div>
  )
}

export default CreatPostPopup