import React from 'react'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <div className="  -z-50 flex h-[100vh] w-full items-center justify-center bg-gray-600 pb-24">
      <form action="/register" method='POST'>
        <div className="w-96 rounded-md bg-white p-6 shadow-sm">
          <div>
            <h1 className="flex items-center justify-center font-[MinimalBold] text-2xl">
              Keeblur Logo
            </h1>
            <label className=" font-[MinimalBold] text-xl text-gray-700">
              First Name
            </label>
            <input
              className="mb-4 w-full bg-gray-50 py-2 px-1 text-gray-500 outline-none"
              name='fName'
              type="name"
            />
            <label className=" font-[MinimalBold] text-xl text-gray-700">
              Last Name
            </label>
            <input
              className="mb-4 w-full bg-gray-50 py-2 px-1 text-gray-500 outline-none"
              name='lName'
              type="name"
            />
            <label className=" font-[MinimalBold] text-xl text-gray-700">
              Email
            </label>
            <input
              className="mb-4 w-full bg-gray-50 py-2 px-1 text-gray-500 outline-none"
              name='email'
              type="email"
            />
            <label className=" font-[MinimalBold] text-xl text-gray-700">
              Password
            </label>
            <input
              className="mb-4 w-full bg-gray-50 py-2 px-1 text-gray-500 outline-none"
              name='password'
              type="password"
            />
            <label className=" font-[MinimalBold] text-xl text-gray-700">
              Confirm Password
            </label>
            <input
              className="mb-4 w-full bg-gray-50 py-2 px-1 text-gray-500 outline-none"
              name='conPassword'
              type="password"
            />
            <input type="checkbox" className="mb-6" id="remember" />
            <label
              htmlFor="remember"
              className="font-[MinimalRecular] text-xl text-gray-700"
            >
              {' '}
              Term of service
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 py-2 text-gray-100 transition-colors hover:bg-blue-600"
            >
              Register
            </button>
            <div className="flex flex-col items-center justify-center p-4 font-[MinimalRecular] text-xl">
              <Link href="/shop">
                <a className="pb-2">Return to store</a>
              </Link>
              <Link href="/account/login">
                <a>
                  Have an account? <span className="text-red-500">Sign In</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
