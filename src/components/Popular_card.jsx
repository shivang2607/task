"use client"
import React from 'react'

const Popular_card = ({img, text}) => {
  return (
    <div className='rounded-[5px] shadow-lg w-[200px] h-[210px] m-2 mx-auto '>
        <img src={img} className='w-[190px] h-[130px]' alt="" />
        <p className='flex w-auto items-center text-center justify-center font-[400] text-[18px] m-3 mt-6'>{text}</p>
    </div>
  )
}

export default Popular_card