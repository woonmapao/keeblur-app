import React from 'react'
import { FaTruck, FaThumbsUp, FaMoneyBill } from 'react-icons/fa'

const Banner = () => {
    return (
        <>
            <div className='flex justify-between items-start py-8 px-6 md:px-48 space-x-12 bg-black text-white font-[MinimalBold]'>
                <div className='flex flex-col items-center'>
                    <FaTruck className='text-4xl pb-2 hover:rotate-45 transition-all duration-300' />
                    <h1>สินค้าประกันศูนย์</h1>
                </div>
                <div className='flex flex-col items-center '>
                    <FaThumbsUp className='text-4xl pb-2 hover:rotate-45 transition-all duration-300' />
                    <h1 >จัดส่งฟรี</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <FaMoneyBill className='text-4xl pb-2 hover:rotate-45 transition-all duration-300' />
                    <h1>เก็บเงินปลายทาง</h1>
                </div>
            </div>
        </>
    )
}

export default Banner