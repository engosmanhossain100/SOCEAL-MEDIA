import React from 'react'

const LeftAuth = ({titel,description,icon}) => {
  return (
    <div>
        <div>{icon}</div>
        <h1 className='font-gilroyBold text-7xl text-primary_color'>{titel}</h1>
        <p className='font-gilroyNormal text-lg text-text_color mt-5'>{description}</p>
    </div>
  )
}

export default LeftAuth