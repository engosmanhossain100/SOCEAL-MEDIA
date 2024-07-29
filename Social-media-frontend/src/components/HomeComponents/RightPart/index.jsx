import React from 'react'
import RightFriends from './RightFriends'
import Stories from './stories'

const RightHome = () => {
  return (
    <>
      <div><RightFriends /></div>
      <div className='mt-10'><Stories /></div>
    </>
  )
}

export default RightHome