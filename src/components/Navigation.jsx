import React from 'react'

const Navigation = () => {
  return (
    <div className='h-fit w-full py-[12px] '>
        <div className="smallone font-[400] text-[12px] w-full flex h-[42px] justify-between ">
            <div className="location flex gap-[8px] h-[18px] w-[118px]">
                <img src="/Map Pin.png" alt="" />
                <span className="">Kozhikode,Calicut</span>
            </div>
            <div className="links flex gap-[20px] h-[16px] w-[237px]">
                <select name="language" className=' bg-[#FFFFFF]' id="language">
                    <option value="Eng">Eng</option>
                    <option value="Hindi">Hindi</option>                    
                </select>
                <select name="currency" className=' bg-[#FFFFFF]' id="currency">
                    <option value="USD">USD</option>
                    <option value="Rupees">Rupees</option>                    
                </select>
                {/* <div className="divider w-[15px] -rotate-90 border-[1px] bg-#E6E6E6"></div> */}
                <span className="accounts flex h-[16px] text-[12px] font-[400]  gap-[2px]">Sign In/Sign Up</span>
            </div>
        </div>



        <div className="middle h-[93px] border-t-[1px] border-gray-200 flex justify-between items-center px-8">
            <img src="/orangemart (1) [Recovered] 2.png" className='h-[65px]' alt="" />
            <div className="w-[492px] flex h-[45px] top-[24px] left-[711px] rounded-[6px] border-[1px] ">
                <input type="search" placeholder='Search' className="search w-[400px] h-[45px] gap-2 px-[18px] py-[12px]"></input>
                <button className='bg-[#FEAF3A] w-[92px] h-[45px] text-white gap-[12px] rounded-tr-[6px] rounded-br-[6px]  '> Search</button>
            </div>
            <div className='flex items-center gap-4'>
                <img src="/Heart.png" height={32} width={32} alt="" />
                 <div className="divider h-[24px] border-[1px] w-0"></div>
                 <div className='gap-[12px] flex'>
                    <img src="/Bag.png" alt="" />
                    <div className="content font-[400]">
                        <div className="text-xs font-[400]">Shopping Cart:</div>
                        <div className='price text-sm font-[400]'>$57.00</div>
                        </div>
                 </div>
            </div>
        </div>


        <div className="navlinks bg-[#FF8A00] flex justify-between items-center py-4 px-4">

            <ui className="flex list-none text-sm  gap-8">
                <li><select className='bg-transparent font-[600] text-white'>
                    <option value="Home" className='bg-none text-white'>
                        Home
                    </option>
                    </select></li>
                <li>
                <select className='bg-transparent font-[400] text-white'>
                    <option value="Shop" className='bg-none text-white'>
                        Shop
                    </option>
                    </select>
                </li>
                <li>
                <select className='bg-transparent font-[400] text-white'>
                    <option value="Pages" className='bg-none text-white'>
                        Pages
                    </option>
                    </select>
                </li>
                <li>
                <select className='bg-transparent font-[400] text-white'>
                    <option value="Blogs" className='bg-none text-white'>
                        Blog
                    </option>
                    </select>
                </li>
                <li className='bg-transparent text-white cursor-pointer font-[400]'>About Us</li>
                <li className='bg-transparent text-white cursor-pointer font-[400]'>Contact Us</li>
            </ui>

            <div className="contacts gap-2 text-sm flex items-center">
                <img src="/PhoneCall 1.png" alt="" />
                <span className="number font-[400] text-white">953-968-4317</span>
            </div>
        </div>
    </div>
  )
}

export default Navigation