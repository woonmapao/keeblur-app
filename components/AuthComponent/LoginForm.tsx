import React from 'react'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className="  -z-50 flex h-[83vh] w-full items-center justify-center bg-gray-600 pb-24">
      <form action="/login" method='POST'>
        <div className="w-96 rounded-md bg-white p-6 shadow-sm">
          <div>
            <h1 className="flex items-center justify-center font-[MinimalBold] text-2xl">
              Keeblur Logo
            </h1>
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
            <input type="checkbox" className="mb-6" id="remember" />
            <label
              htmlFor="remember"
              className="font-[MinimalRecular] text-xl text-gray-700"
            >
              {' '}
              Remember Me
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 py-2 text-gray-100 transition-colors hover:bg-blue-600"
            >
              Login
            </button>
            <div className="flex flex-col items-center justify-center p-4 font-[MinimalRecular] text-xl">
              <Link href="/account/register">
                <a className="pb-2">Create Account</a>
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
