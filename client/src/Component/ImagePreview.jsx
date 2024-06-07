import React from 'react'

export default function ImagePreview({image,name}) {
  return (
    <div className='w-32 mt-2 h-32 p-2 bg-main border border-border rounded'>
      <img src={image ? image : "/images/user.jpg"} alt={name} className='w-full h-full object-cover' />
    </div>
  )
}
