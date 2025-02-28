import React from 'react'
import animation from '../public/anim.gif'
import Image from 'next/image'
const Loading = () => {
  return (
    <div className="flex fixed top-0 left-0 z-[200] w-full bg-black justify-center items-center h-screen">
      <Image src={animation} alt="Loading" className="h-72" />
    </div>
  )
}

export default Loading
