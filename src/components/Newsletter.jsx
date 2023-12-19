import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full h-[142px] border-[1px] font-semibold tracking-wide bg-[#F7F7F7] mt-10 flex items-center justify-between px-2 '>
        <div>Subscribe our Newsletter</div>
        <div>
            <input type="email" placeholder='Enter your Email' className='w-[492px] rounded-[46px] border-[1px] p-[14px] gap-[10px] h-12 ' />
            <button className='h-[52px] gap-[16px] rounded-[46px] px-10 py-2 bg-[#FF8A00] -translate-x-24 text-white'>Subscribe</button>
        </div>
        <div>
            <ul className='gap-2 flex list-none w-[200px] items-center'>
                <li className='cursor-pointer'>
                    <img src="/Social Media.png" alt="" />
                </li>
                <li className='cursor-pointer'>
                    <img src="/Social Media (3).png" alt="" />
                </li>
                <li className='cursor-pointer'>
                    <img src="/Social Media (1).png" alt="" />
                </li>
                <li className='cursor-pointer'>
                    <img src="/Social Media (2).png" alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Newsletter