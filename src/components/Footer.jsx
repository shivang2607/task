import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1A1A1A] w-full h-[400px] pt-16 gap-[60px] flex-col justify-center'>
        <div className="w-[1245px] h-[170px] flex mx-auto justify-between mb-auto">
            <img src="/orangemart (1) 1.png" alt="" />

            <div className="footercontent1 flex-col flex-wrap w-[126px] text-white">
                <div className='font-[400] text-[16px] mb-5'>My Account</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>My Account</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Order History</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Shopping Cart</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Wish List</div>
            </div>

            <div className="footercontent1 flex-col flex-wrap w-[126px] text-white">
                <div className='font-[400] text-[16px] mb-5'>Helps</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Contact</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Faqs</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Terms & Condition</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Privacy Policy</div>
            </div>

            <div className="footercontent1 flex-col flex-wrap w-[126px] text-white">
                <div className='font-[400] text-[16px] mb-5'>Quick links</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer '>About</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Shop</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Product</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Track Order</div>
            </div>

            <div className="footercontent1 flex-col flex-wrap w-[126px] text-white">
                <div className='font-[400] text-[16px] mb-5'>Categories</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Fruit & Vegetables</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Meat & Fish</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Bread & Bakery</div>
                <div className='text-sm text-[#999999] my-3 cursor-pointer'>Beauty & Health</div>
            </div>
        </div>

        <div className="bottom flex  w-[1320px] border-[#808080] border-t-[1px] h-[80px] mx-4 justify-between items-center bottom-0 mt-20">
            <span className='text-sm text-[#808080]'>Orange mart eCommerce © 2021. All Rights Reserved</span>
            <div className='w-[280px] h-[32px] flex gap-2'>
                <div className='rounded-md border-[1px] border-gray-600 py-2 px-2 cursor-pointer'>
                    <img src="/ApplePay.png" alt="" />
                </div>
                <div className='rounded-md border-[1px] border-gray-600 py-2 px-2 cursor-pointer'>
                    <img src="/visa-logo.png" alt="" />
                </div>
                <div className='rounded-md border-[1px] border-gray-600 py-2 px-2 cursor-pointer'>
                    <img src="/Discover.png" alt="" />
                </div>
                <div className='rounded-md border-[1px] border-gray-600 py-2 px-2 cursor-pointer'>
                    <img src="/Mastercard.png" alt="" />
                </div>
                <div className='rounded-md border-[1px] border-gray-600  cursor-pointer'>
                    <img src="/Cart.png" alt="" />
                </div>
                {/* <img src="/Frame 142.png" alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Footer