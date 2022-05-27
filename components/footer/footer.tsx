import React from 'react'
import PaymentData from './payment'

const Footer = () => {
    return (
        <div className='text-black bg-white  '>
            <div className='flex justify-center p-4 bg-red-500 text-white hover:bg-blue-400 transition-all duration-300'>
                    <h1 className='md:text-sm text-xl font-[MinimalRecular]'>
                    We develop and create innovative, unique, original customized keyboards as well as peripheral products. 
                    </h1>
                </div>
            <div className='px-24 pt-8 flex flex-col'>
                <h1 className='font-[MinimalBold] text-xl'>Payment Method</h1>
                <div className='flex pl-8'>
                    {PaymentData.map((data, index) => {
                        return <div className=' w-12 h-12 m-2 md:m-4'>
                            <img src={data.image} alt={data.titleName} />
                        </div>
                    })}
                   
                </div>
                

                
            </div>
            <div className='px-24 py-4 '>
                <h1 className='font-[MinimalBold] text-xl'>Transportation</h1>
                <div className='flex pl-12 md:h-8 h-5 space-x-8 '>
                    <img src="images/transport/kerry.png" alt="" />
                    <img src="images/transport/scg.png" alt="" />
                </div>
                
            </div>

            <div className='flex justify-center items-center p-6'>
                <h1 className='font-[MinimalBold] text-xl text-black'>© 2022, Keeblur <span className='font-[MinimalRecular]'> All Rights Reserved</span></h1>
            </div>
        </div>
    )
}

export default Footer