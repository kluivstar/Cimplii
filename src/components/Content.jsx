import React from 'react'
import { HiOutlineGlobe } from "react-icons/hi";
import { IoMdLink } from "react-icons/io";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { FaUncharted } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import background from '../assets/content-background.png'

const contentList = [
    {
        icon: IoMdLink,
        title: "Decisions start with clarity",
        description:
        "Clear, reliable data creates confidence. We focus on making sustainability insights easy to understand and trust.",
    },
    {
        icon: FaChartPie,
        title: "Sustainability connects everything",
        description:
        "Environmental impact doesn’t live in silos. Our tools help teams see how operations, impact, and responsibility link together.",
    },
    {
        icon: FaMagnifyingGlassChart,
        title: "Momentum matters more than perfection",
        description:
        "Progress happens in steps. We help organizations move forward with practical actions, not unrealistic ideals.",
    },
    {
        icon: FaUncharted,
        title: "Insights that fuel real growth",
        description:
        "When insights are actionable, growth follows. We turn complex data into direction teams can act on.",
    },
];


const Content = () => {
  return (
    <section className='p-5 bg-cover' style={{backgroundImage: `url(${background})`}}>
        {/* Content Texts */}
        <div className='py-10'>
            <h1 className="text-2xl text-center font-bold">Built for clarity,</h1>
            <h2 className="text-2xl font-semibold text-center">
            Designed for action</h2>
        </div>

        {/* Content List */}
        <div className="py-10 space-y-5">
        {contentList.map((content, index) => {
          {/* Icon-variable is treated is rendered as a component and rendered - dynamic component rendering*/}
          const Icon = content.icon;

          return (
            <div key={index} className="py-3 bg-white rounded-xl py-8 px-5  flex flex-col">
                {/* Instantiate(turns component reference into actual JSX element react can render) icons after storing in data(container) in the array*/}
              <Icon className="text-2xl mb-2 text-black" />
              <h3 className="text-base font-semibold">
                {content.title}
              </h3>
              <p className="text-black">
                {content.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  )
}

export default Content