import React from 'react'
import Link from 'next/link'


const LoginForm = () => {
  return (
    <div className='  w-full flex items-center justify-center h-[83vh] bg-gray-700 -z-50 pb-24'>
      <form action="">
        <div className='bg-white w-96 p-6 rounded-md shadow-sm'>
          <div>
            <h1 className='font-[MinimalBold] text-2xl flex justify-center items-center'>Keeblur Logo</h1>
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>Email</label>
            <input type="email" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <label className=' text-gray-700 font-[MinimalBold] text-xl'>Password</label>
            <input type="password" className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' />
            <input type="checkbox" className='mb-6' id='remember' />
            <label htmlFor='remember' className='text-gray-700 font-[MinimalRecular] text-xl'> Remember Me</label>
            <button type='submit' className='bg-blue-500 w-full text-gray-100 rounded-md py-2 hover:bg-blue-600 transition-colors'>Login</button>
            <div className='flex flex-col justify-center items-center p-4 font-[MinimalRecular] text-xl'>
              <Link href="/" >
                <a className='pb-2'>Create Account</a>
              </Link>
              <Link href="/">
                <a>Forgot your password?</a>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm