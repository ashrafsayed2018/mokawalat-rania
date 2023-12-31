import Image from 'next/image'
import React from 'react'

type PropsType = {

  size:number 
}
function LogoImage({size}:PropsType) {
  return (
    <Image 
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      className='w-40 h-24'/>
  )
}

export default LogoImage

