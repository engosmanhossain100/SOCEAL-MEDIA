import React, { useEffect, useState } from 'react'
import Feeling from '../../../../svg/Feeling'
import EmojiPicker from 'emoji-picker-react'

const EmojiPickers = ({text, setText, textRef, changePart }) => {

    const [picker , setPicker] = useState(false);
    const [cursorPosition, setCursorPosition] = useState();

    const handleEmoji = ({emoji},e) => {
        const ref = textRef.current
        ref.focus();
        const start = text.substring(0,ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end
        setText(newText);
        setCursorPosition(start.length + emoji.length)
      };
    
      useEffect(()=>{
        textRef.current.selectionEnd = cursorPosition
      },[cursorPosition])
    

  return (
    <>

    <div className={`${changePart ? "flex items-center justify-between mt-5" : "mt-5"}`}> 
      
      <textarea ref={textRef} onChange={(e)=>setText(e.target.value)} value={text} maxLength={100} placeholder='whats up say something' className={`${changePart ? "w-[90%] min-h-24 outline-none p-2 font-base font-gilroyMedium'" : 'w-full min-h-24 outline-none p-2 font-base font-gilroyMedium'}`}/>
  
        {
          changePart && 

          <div className='cursor-pointer relative'>
          <div onClick={() => setPicker((prev)=> !prev)}><Feeling /></div>
            {
            picker && <div className='absolute top-0 right-8 z-10'><EmojiPicker onEmojiClick={handleEmoji} /></div>
            }
          </div>
        }

      </div>


        {
          !changePart && 

          <div className='flex items-center justify-between mb-3'>

              <div className='w-10 h-10 bg-gradient-to-r from-cyan-100 to-page_color rounded-md cursor-pointer'></div>

              <div className='cursor-pointer relative'> 
              <div onClick={() => setPicker((prev)=> !prev)}><Feeling /></div>
                {
                picker && <div className='absolute -top-[460px] -left-[300px]'><EmojiPicker onEmojiClick={handleEmoji} /></div>
                }
              </div>
            
        </div>
        }

    
    </>
  )
}

export default EmojiPickers