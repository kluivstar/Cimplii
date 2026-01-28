import React from 'react'

const Button = () => {
  return (
    <div className='mt-4 flex flex-col gap-2 items-center md:flex-row md:justify-center lg:gap-5 2xl:pt-5'>
      <button className="bg-black text-white px-4 py-2 text-[15px] hover:bg-slate-300 hover:text-black xl:text-lg 2xl:text-2xl">▪ Request a demo</button>
      <button className="bg-black text-white px-4 py-2 text-[15px] hover:bg-slate-300 hover:text-black xl:text-lg 2xl:text-2xl">▪ Explore the platform</button>

    </div>
  )
}

export default Button