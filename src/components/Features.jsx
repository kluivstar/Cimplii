import React from 'react'
import FeatureImage from '../assets/image.png';

const featureData = [
    {
        title: "Track",
        description: "Monitor your sustainability metrics in real-time",
    },
    {
        title: "Model",
        description: "Use advanced modeling tools to predict and plan initiatives.",
    },
    {
        title: "Act",
        description: "Implement actionable strategies based on data-driven insights.",
    },
    {
        title: "Report",
        description: "Generate comprehensive reports to share your progress",
    }
]

const Features = () => {
  return (
    <section className='bg-white p-5 md:mt-60 xl:mt-110'>
        {/* Features Headline */}
        <div className='py-10 lg:text-center'>
            <h1 className="mx-auto text-2xl text-center md:text-3xl font-bold lg:w-1/2 xl:text-4xl">
            Tools to measure, model, and act on sustainability, without guesswork.
            </h1>

        </div>

        <div className='lg:flex lg:flex-row lg:gap-10'>
            {/* Features Image */}
            <div className='lg:w-1/2'>
                <img src={FeatureImage} alt="" className='lg:h-full'/>
            </div>

            {/* Features list and Button*/}
            <div className='lg:w-1/2 lg:-mt-14'>
                {/* Features List */}
                <div className='py-10'>
                    {featureData.map((feature, index) => (
                        <div key = {index} className='py-3 lg:py-5'>
                            <hr className='text-slate-200 lg:pt-2'/>
                            <h2 className='text-[16px] md:text-xl font-semibold'>{feature.title}</h2>
                            <p className='text-black md:text-lg lg:-mb-5'>{feature.description}</p>
                            
                        </div>
                    ))}
                </div>
                {/* Feature Button */}
                <div className='mx-auto text-center lg:text-left'>
                    <button className="bg-black text-white px-20 py-2 text-[15px] hover:bg-slate-300 hover:text-black md:w-full lg:w-1/2 lg:px-10 lg:py-2 xl:text-lg">▪ Explore features</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features