import React, { useRef, useState } from 'react'
import EmojiPickers from './EmojiPickers'
import { CircleCloseIcon } from '../../../../svg/CircleClose';
import { Media } from '../../../../svg/Media';

const ImageViewer = ({text,setText,textRef, image , setImage, setShow}) => {

  const choooseFile = useRef(null);

  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img)=>{
      if(
        img.type !== "image/png" &&
        img.type!== "image/jpg" &&
        img.type!== "image/gif" &&
        img.type!== "image/webp"
      ) {
        console.log("image not found");
        
      }
      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImage) => {
        setImage((images)=>[...images, renderImage.target.result]);
      };
    });
  };

  return (
    <>
    <EmojiPickers text={text} setText={setText} textRef={textRef} changePart />
   
   <div className='p-2 border border-line_color rounded-md mb-5'>
    <div className='w-full h-[380px] bg-white-100 rounded-md'>

      <input className='hidden' ref={choooseFile} onChange={handleImageUpload} type='file' multiple accept='image/jpg.image/png.image/webp.image/gif.'/>
      
      {
        image && image.length 

        ? 
       
        <div className='relative w-full h-full'>

        <div className='absolute top-3 left-3 flex items-center gap-x-3 bg-white rounded-md p-2 cursor-pointer' onClick={()=>choooseFile.current.click()}>
            <Media />
            <span className='font-gilroyNormal text-sm text-black'>Add Photos / Videos</span>
            </div>
  
          <div className='absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer'onClick={()=>setImage([])} ><CircleCloseIcon /></div>
        
          <div className={`${
         image.length === 1 ? "overflow-hidden w-full h-full" 
         : image.length === 2 ? "overflow-hidden grid grid-cols-2 gap-2 w-full h-full" 
         : image.length === 3 ? "overflow-hidden grid grid-cols-2 gap-2 w-full h-full" 
         : image.length === 4 ? "overflow-hidden grid grid-cols-2 gap-2 w-full h-full" 
         : image.length >= 5 ? "overflow-hidden grid grid-cols-2 gap-2 w-full h-full"
         : "overflow-hidden"
        }`}>
        {
           image.slice(0,4).map((img,i)=>(
            <img key={i} src={img} alt='images' 
            className={`object-cover overflow-hidden w-full h-full ${
              image.length === 3 ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
              : image.length === 4 && "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"}`}  /> 
          ))
        }

       {
        image.length >= 5 &&

        (<div className='absolute bottom-[50px] right-[50px] -translate-x-[50%] -translate-y-[50%] w-10 h-10 bg-white rounded-full flex justify-center items-center'>
          <span className='font-gilroyBold text-base text-black'>+{image.length -4}</span>
        </div>)
       }

       </div>

        </div>
  
        : 

        <div className="relative flex items-center justify-center h-full cursor-pointer">

          <div className='absolute top-2 right-2 text-secondary_color cursor-pointer'onClick={()=>setShow(false)}><CircleCloseIcon /></div>

          <div className='flex flex-col items-center cursor-pointer' onClick={()=>choooseFile.current.click()}>

            <div className='w-10 h-10 bg-black text-white rounded-full flex items-center justify-center'><Media /></div>

            <div className='mt-3'>
            <p className='font-gilroyBold text-base text-center'>Add Images/Video</p>
            <p className='font-gilroyBold text-base text-center'>Or Drag and Drop</p>
            </div>

          </div>

        </div>

      }   
      
    </div>
   </div>

    </>
  )
}

export default ImageViewer