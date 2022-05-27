import React from 'react'

const Subscription = () => {
  return (
    <div className="text-black bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center py-24">
        <div className='flex flex-col justify-center items-center bg-blue-600 p-12 text-white font-[MinimalBold] text-xl'>
            <h1 className='text-2xl'>รับส่วนลดและสิทธิพิเศษ!</h1>
            <h2 className='font-[MinimalRecular] pb-4'>เมื่อลงทะเทียนรับข่าวสาร รีวิว โปรโมชั่น</h2>
           <div className='space-x-2'>
           <input type="text" placeholder='E-mail' className=' border-2 rounded-lg md:p-4 md:px-8 text-black ' />
            <button className='bg-yellow-400 p-1 md:p-5 rounded-lg hover:bg-red-500 transition-all duration-300'>Subscribe</button>
           </div>
        </div>
    </div>
  )
}

export default Subscription