import React from 'react'
import Link from 'next/link'
// import {Banner Big} from "../../public/Bannar Big.png"

const Banner = () => {
  return (
    <>
    <div className='w-[1319px] h-[600px] top-56 mx-4 flex bg-banner-big '>
        <div className="pt-14">
        <div className=" bannerbig rounded-[10px] h-[600px] w-[872px] " >
            <img src="/wepik-export-20231122082614uhui 1.png" className='  w-[460px] h-[513px] ml-[380px]' alt="" />
            </div>
        </div>
        <div className=' ml-6 h-auto'>
        <div className='h-[288px] flex w-[423px] rounded-[10px] bg-banner-right'>
            <div className="content flex-col justify-between  w-[143px] mt-[32px] ml-[32px] h-[136px]">
                <div className='h-fit w-[143px]'>
                    <span className='text-sm font-[400]'>SUMMER SALE</span>                   
                    <div className='font-semibold text-[32px]'>45% OFF</div>                    
                    <div className='font-[300] text-[12px] mt-2'>Only fruits & Vegetables</div>
                </div>
                <button className='rounded-[43px] gap-3 text-[#D88B1A] bg-transparent font-semibold text-[16px] mt-4'>Shop Now → </button>
            </div>
        </div>


        <div className='h-[288px] w-[423px] rounded-[10px] mt-6 bg-banner-right-bottom flex items-center justify-center'>
            <div className='w-[343px] h-[153px] gap-8'>
                <div className='flex-col'>
                    <span className=' flex  justify-center text-[14px] font-[400] text-white'>BEST DEAL</span>
                    <div className='font-semibold text-white text-3xl align-middle flex text-center'>Special Products Deal of the week</div>
                </div>
                <button className='rounded-[43px] gap-3 flex justify-center w-full text-[#D88B1A] bg-transparent font-semibold text-[16px] mt-4'>Shop Now → </button>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Banner