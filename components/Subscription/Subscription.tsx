import React from 'react'

const Subscription = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 py-24 text-black">
      <form action="/" method="POST">
        <div className="flex flex-col items-center justify-center bg-blue-600 p-12 font-[MinimalBold] text-xl text-white">
          <h1 className="text-2xl">รับส่วนลดและสิทธิพิเศษ!</h1>
          <h2 className="pb-4 font-[MinimalRecular]">
            เมื่อลงทะเทียนรับข่าวสาร รีวิว โปรโมชั่น
          </h2>
          <div className="space-x-2">
            <input
              className=" rounded-lg border-2 text-black md:p-4 md:px-8 "
              name="email"
              placeholder="E-mail"
              type="email"
            />
            <button
              className="rounded-lg bg-yellow-400 p-1 transition-all duration-300 hover:bg-red-500 md:p-5"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Subscription
