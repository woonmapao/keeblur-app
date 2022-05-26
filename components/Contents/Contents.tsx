import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Banner from './banner'
const Contents = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center bg-white text-black pt-12 overflow-hidden '>
        <div className='font-[MinimalBold] text-2xl pb-4'>Featured Products</div>
        <FeaturedProducts/>
    </div>
        <Banner/>
        
    </>
  )
}

export default Contents