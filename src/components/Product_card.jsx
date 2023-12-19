import React from 'react'

const Product_card = ({title, price, img, oldPrice}) => {
    return (
        <div className=' w-1/5 h-[327px] border-[1px] hover:border-blue-500 hover:border-2'>
            <img src={img} className='w-[264px]' alt="" />
            <div className='p-2'>
                <div>
                    <span className='text-sm text-[#4D4D4D] font-[400]'>{title}</span>

                    <div className="flex justify-between">
                    <div className='flex '>
                        <span className='font-[400]'>{price}</span>
                        <span className='font-[400] text-[#4D4D4D] line-through ml-1'>{oldPrice}</span>
                        </div>
                        <button className='rounded-full '>
                            <img src="/Add To Cart.png" alt="" />
                        </button>
                    
                    </div>
                    <img src="/Rating.png" alt="" />
                </div>
            </div>
           
        </div>
      )
}

export default Product_card