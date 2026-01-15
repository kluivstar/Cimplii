import React from 'react'
import TestimonialImage from '../assets/testImg.png';

const Testimonial = () => {
  return (
    <section>
        <div className='p-5'>
            {/* Testimonial Image */}
            <div>
                <img src={TestimonialImage} alt="Testimonial" />
            </div>
            <div>
                <div className='py-2'>
                    <span>❝</span>
                    <h1 className='text-2xl font-semibold py-2'>We finally exprienced what it means to truely work with valuable business data, it help shaped our company to what it has become</h1>
                    <p>Patrick Star</p>
                    <span className='text-slate-700'>CEO, BB Inc.</span>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Testimonial