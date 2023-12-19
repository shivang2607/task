import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Newsletter from '@/components/Newsletter'
import Popular_card from '@/components/Popular_card'
import Product_card from '@/components/Product_card'
import Image from 'next/image'

export default function Home() {

  const popular = [
    {img:"/image 1.png",
    text:"Fresh Fruits", },
    {img:"/image 1 (1).png",
    text:"Fresh Vegetables", },
    {img:"/image 1 (2).png",
    text:"Meat & Fish", },
    {img:"/image 1 (3).png",
    text:"Snacks", },
    {img:"/image 1 (4).png",
    text:"Drinks", },
    {img:"/image 1 (5).png",
    text:"Beauty & Health", },
    {img:"/image 1 (6).png",
    text:"Bread & Bakery", },
    {img:"/image 1 (7).png",
    text:"Baking Needs", },
    {img:"/image 1 (8).png",
    text:"Diabetic Food", },
    {img:"/image 1 (9).png",
    text:"Cleaning items", },
    {img:"/image 1 (11).png",
    text:"Oil", },
    {img:"/image 1 (12).png",
    text:"Cooking powders", },  

  ]

  const product = [
    {
      title:"Green Apple",
      price:"$14.99",
      oldPrice:"$20.99",
      img:"/Product Image.png",
    },
    {
      title:"Orange",
      price:"$20.00",
      oldPrice:"",
      img:"/Product Image (1).png",
    },
    {
      title:"Potato",
      price:"$40.00",
      oldPrice:"",
      img:"/Product Image (2).png",
    },
    {
      title:"Green Lettuce",
      price:"$9.00",
      oldPrice:"",
      img:"/Product Image (3).png",
    },
    {
      title:"Eggplant",
      price:"$34.00",
      oldPrice:"",
      img:"/Product Image (4).png",
    },
    {
      title:"Big Potatoes",
      price:"$20.00",
      oldPrice:"",
      img:"/Product Image (5).png",
    },
    {
      title:"Corn",
      price:"$20.00",
      oldPrice:"",
      img:"/Product Image (6).png",
    },
    {
      title:"Fresh Cauliflower",
      price:"$12.00",
      oldPrice:"",
      img:"/Product Image (7).png",
    },
    {
      title:"Green Capsicum",
      price:"$9.00",
      oldPrice:"$20.99",
      img:"/Product Image (8).png",
    },
    {
      title:"Green Chili",
      price:"$34.00",
      oldPrice:"",
      img:"/Product Image (9).png",
    }
  ]

  const posts = ["/Instagram Post.png", "/Instagram Post (1).png", "/Instagram Post (2).png", "/Instagram Post (3).png",  "/Instagram Post (5).png", "/Instagram Post (6).png"]

  return (
    <main className="">
      <Navigation/>
      <Banner/>

    <div className="featured w-[1320px] h-[130px] mt-2 flex rounded-lg justify-between p-[40px] drop-shadow-lg shadow-lg mx-4">
      <div className="h-[48px] flex items-center gap-4 ">
        <img src="/delivery-truck 1.png" alt="" />
        <div className='gap-2'>
          <p className='font-semibold text-base'>Free Shipping</p>
          <p className='font-[400] text-[14px]'>Free shipping on all your order</p>
        </div>
      </div>

      <div className="h-[48px] flex items-center gap-4 ">
        <img src="/headphones 1.png" alt="" />
        <div className='gap-2'>
          <p className='font-semibold text-base'>Customer Support 24/7</p>
          <p className='font-[400] text-[14px]'>Instant access to Support</p>
        </div>
      </div>

      <div className="h-[48px] flex items-center gap-4 ">
        <img src="/Group.png" alt="" />
        <div className='gap-2'>
          <p className='font-semibold text-base'>100% Secure Payment</p>
          <p className='font-[400] text-[14px]'>We ensure your money is save</p>
        </div>
      </div>

      <div className="h-[48px] flex items-center gap-4 ">
        <img src="/package.png" alt="" />
        <div className='gap-2'>
          <p className='font-semibold text-base'>Money-Back Guarantee</p>
          <p className='font-[400] text-[14px]'>30 Days Money-Back Guarantee</p>
        </div>
      </div>

    </div>

    <div className='w-[1320px] m-4 mt-10 mb-6 flex justify-between items-center'>
      <h2 className='flex w-auto text-[32px] font-semibold'>Popular Categories</h2>
      <button className='rounded-[43px] gap-3 flex justify-center w-auto text-[#D88B1A] bg-transparent font-semibold text-[16px] mt-4'>View All → </button>
    </div>
    <div className='flex mx-2 py-2 flex-wrap'>
      {popular.map(val=>{
        return <Popular_card img={val.img} text={val.text}/>
      })}
    </div>


    <div className='w-[1320px] m-4 mt-10 mb-6 flex justify-between items-center'>
      <h2 className='flex w-auto text-[32px] font-semibold'>Popular Products</h2>
      <button className='rounded-[43px] gap-3 flex justify-center w-auto text-[#D88B1A] bg-transparent font-semibold text-[16px] mt-4'>View All → </button>
    </div>
    <div className='flex mx-2 py-2 px-2 flex-wrap'>
      {product.map(val=>{
        return <Product_card img={val.img} title={val.title} price={val.price} oldPrice={val.oldPrice}/>
      })}
    </div>


    <div className="dsicountBanner rounded-[10px] w-[1320px] h-[358px] mx-4 my-12 bg-discount-banner overflow-hidden">
      <div className="w-[450px] right-8"></div>
    </div>

    <h2 className='flex w-full justify-center text-[32px] font-semibold mt-8'>Follow Us on Instagram</h2>
    <div className='flex mx-2 py-2  justify-between'>
      {posts.map(img=>{
        return (
          <div className='rounded=[10px] h-[200px] w-[200px] m-2'>
              <img src={img} alt="" />
          </div>
        )
      })}
    </div>
    <Newsletter/>
    <Footer/>

    </main>
  )
}
