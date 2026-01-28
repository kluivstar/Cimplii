import React from 'react'

const CTA = () => {
  return (
    <section className='bg-slate-100'>
        <div className='px-10 py-10 md:py-15 lg:py-25 flex flex-col gap-8'>
            <h1 className='text-2xl font-semibold leading-6 text-center tracking-[.05em] md:text-[31px] lg:font-semibold lg:text-4xl'>Ready to maximize your business potential?</h1>
            {/* CTA Button */}
            <div className='mx-auto text-center'>
                <button className="bg-black w-full text-white px-8 py-3 text-[15px] hover:bg-slate-300 hover:text-black md:text-lg md:px-5">▪ Request a demo</button>
            </div>
        </div>
    </section>
  )
}

export default CTA