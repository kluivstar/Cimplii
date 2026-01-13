import React from 'react'
import FeatureImage from '../assets/image.png';

const featureData = [
    {
        title: "Track",
        description: "Monitor your sustainability metrics in real-time with our intuitive dashboard.",
    },
    {
        title: "Model",
        description: "Use advanced modeling tools to predict and plan your sustainability initiatives.",
    },
    {
        title: "Act",
        description: "Implement actionable strategies based on data-driven insights to enhance your sustainability efforts.",
    },
    {
        title: "Report",
        description: "Generate comprehensive reports to share your sustainability progress with stakeholders.",
    }
]

const Features = () => {
  return (
    <section className='bg-white p-5'>
        {/* Features Headline */}
        <div className='py-10'>
            <h1 className="text-2xl text-center font-bold">Tools to measure, model, and act on sustainability, without guesswork.</h1>
        </div>

        <div>
            {/* Features Image */}
            <div>
                <img src={FeatureImage} alt="" />
            </div>
            {/* Features List */}
            <div className='py-10'>
                {featureData.map((feature, index) => (
                    <div key = {index} className='py-3'>
                        <hr className='text-slate-400'/>
                        <h2 className='text-[16px] font-semibold'>{feature.title}</h2>
                        <p className='text-black'>{feature.description}</p>
                    </div>
                ))}
            </div>
            {/* Feature Button */}
            <div className='mx-auto text-center'>
                <button className="bg-black text-white px-20 py-2 text-[15px] hover:bg-slate-300 hover:text-black">▪ Explore features</button>
            </div>
        </div>
    </section>
  )
}

export default Features