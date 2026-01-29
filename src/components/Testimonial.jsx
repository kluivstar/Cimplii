import React from 'react'
import TestimonialImage from '../assets/testImg.png';

const Testimonial = () => {
  return (
    <section>
        <div className='p-5 md:flex md:gap-10 md:py-8 lg:px-5 lg:py-30'>
            {/* Testimonial Image */}
            <div className='lg:w-1/2'>
                <img src={TestimonialImage} alt="Testimonial image" />
            </div>
            <div className='lg:w-1/2 lg:mt-10  xl:content-center'>
                <div className='py-2 lg:px-12'>
                    <span className='text-4xl'>❝</span>
                    <h1 className='text-2xl font-semibold -mt-4 lg:text-5xl'>We finally exprienced what it means to truely work with valuable business data.</h1>
                    <p className='font-bold text-xl mt-5'>Patrick Star</p>
                    <span className='text-slate-700'>CEO, BB Inc.</span>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Testimonial