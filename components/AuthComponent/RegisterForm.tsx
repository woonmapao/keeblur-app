import React from 'react'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <div className='  w-full flex items-center justify-center h-[100vh] bg-gray-600 -z-50 pb-24'>
      <form action="">
        <div className='bg-white w-96 p-6 rounded-md shadow-sm'>
          <div>
            <h1 className='font-[MinimalBold] text-2xl flex justify-center items-center'>Keeblur Logo</h1>
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>First Name</label>
            <input type="name" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>Last Name</label>
            <input type="name" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>Email</label>
            <input type="email" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>Password</label>
            <input type="password" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>Confirm Password</label>
            <input type="password" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <input type="checkbox" className='mb-6' id='remember' />
            <label htmlFor='remember' className='text-gray-700 font-[MinimalRecular] text-xl'> Term of service</label>
            <button type='submit' className='bg-blue-500 w-full text-gray-100 rounded-md py-2 hover:bg-blue-600 transition-colors'>Login</button>
            <div className='flex flex-col justify-center items-center p-4 font-[MinimalRecular] text-xl'>
              <Link href="/shop" >
                <a className='pb-2'>Return to store</a>
              </Link>
              <Link href="/account/login">
                <a>Have an account? <span className='text-red-500'>Sign In</span></a>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm