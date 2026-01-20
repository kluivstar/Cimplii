import React from 'react'
import Image from "../assets/casestudy-image.png"

const CaseStudy = () => {
  return (
    <section className='bg-white p-5 md:p-10 lg:p-30'>
        <div className='bg-slate-50 rounded-lg flex flex-col leading-6 py-8 px-5 md:flex-row gap-6'>
            {/* Session Image */}
            <div>
                <img className='rounded-md lg:h-full' src={Image} alt="" />
            </div>

            {/* Session Details */}
            <div>
                <h1 className='text-2xl lg:text-xl xl:text-2xl font-semibold py-2'>Why Businesses Loves Cimplii</h1>
                <p className='lg:text-lg'>With how insights are highly sort after by brands and organization Cimplii has become a valuable asset to help drive growth through valuable and concise insights. Decisions are make faster and efficiently without guesswork.</p>
                
                {/* Case Study Button */}
                <div className='mx-auto text-center md:text-left'>
                    <button className="bg-black w-full text-white px-15 py-2 text-[15px] lg:px-5 hover:bg-slate-300 hover:text-black md:w-auto lg:text-base xl:text-lg">▪ Read case study</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaseStudy