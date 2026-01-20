import React from 'react'
import FeatureImage from '../assets/image.png';

const featureData = [
    {
        title: "Track",
        count: "001",
        description: "Monitor your sustainability metrics in real-time",
    },
    {
        title: "Model",
        count: "002",
        description: "Use advanced modeling tools to predict and plan initiatives.",
    },
    {
        title: "Act",
        count: "003",
        description: "Implement actionable strategies based on data-driven insights.",
    },
    {
        title: "Report",
        count: "004",
        description: "Generate comprehensive reports to share your progress",
    }
]

const Features = () => {
  return (
    <section className='bg-white p-5 md:mt-60 xl:py-20 2xl:py-40'>
        {/* Features Headline */}
        <div className='py-10 lg:text-center'>
            <h1 className="mx-auto text-2xl text-center md:text-3xl font-bold lg:w-1/2 xl:text-4xl 2xl:text-5xl">
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
                        <div key = {index} className='py-3 lg:py-5 2xl:space-y-2'>
                            <hr className='text-slate-200 lg:pt-2 2xl:pt-20'/>
                            <div className='flex justify-between'>
                                <h2 className='text-[16px] md:text-xl 2xl:text-3xl font-semibold'>{feature.title}</h2>
                                <span className='text-black text-sm md:text-lg 2xl:text-2xl font-medium'>{feature.count}</span>
                            </div>
                            <p className='text-black md:text-lg lg:-mb-5 2xl:text-2xl'>{feature.description}</p>
                            
                        </div>
                    ))}
                </div>
                {/* Feature Button */}
                <div className='mx-auto text-center lg:text-left'>
                    <button className="bg-black text-white px-20 py-2 text-[15px] hover:bg-slate-300 hover:text-black md:w-full lg:w-1/2 lg:px-10 lg:py-2 xl:text-lg 2xl:text-2xl">▪ Explore features</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features