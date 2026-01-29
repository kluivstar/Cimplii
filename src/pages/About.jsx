import React from 'react'
import AboutImg from "../assets/about-image-1.png"
import AboutImgTwo from '../assets/about-image-2.jpg'
import { HiOutlineGlobe } from "react-icons/hi";
import { IoMdLink } from "react-icons/io";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { FaUncharted } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Ava Thompson",
    role: "Chief Executive Officer",
    email: "ava.thompson@complii.com",
  },
  {
    name: "Daniel Okoye",
    role: "Chief Technology Officer",
    email: "daniel.okoye@complii.com",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Product",
    email: "sophia.martinez@complii.com",
  },
  {
    name: "Ethan Brooks",
    role: "Lead Software Engineer",
    email: "ethan.brooks@complii.com",
  },
  {
    name: "Liam Chen",
    role: "Data & Sustainability Analyst",
    email: "liam.chen@complii.com",
  },
  {
    name: "Nina Patel",
    role: "UX/UI Designer",
    email: "nina.patel@complii.com",
  },
  {
    name: "Marcus Johnson",
    role: "Business Operations Manager",
    email: "marcus.johnson@complii.com",
  },
  {
    name: "Isabella Rossi",
    role: "Marketing & Communications Lead",
    email: "isabella.rossi@complii.com",
  },
  {
    name: "Oliver Grant",
    role: "Customer Success Manager",
    email: "oliver.grant@complii.com",
  },
  {
    name: "Zara Ahmed",
    role: "Partnerships & Growth Lead",
    email: "zara.ahmed@complii.com",
  },
];

const contentList = [
    {
        icon: FaMagnifyingGlassChart,
        title: "Decisions Starts With Clarity",
        description:
        "Clear, reliable data creates confidence. We focus on making sustainability insights easy to understand and trust.",
    },
    {
        icon: LuCircleArrowOutUpRight,
        title: "Sustainability Connects Everything",
        description:
        "Environmental impact doesn’t live in silos. Our tools help teams see how operations, impact, and responsibility link together.",
    },
    
    {
        icon: FaUncharted,
        title: "Insights That Fuels Real Growth",
        description:
        "When insights are actionable, growth follows. We turn complex data into direction teams can act on.",
    },
];

const About = () => {
  return (
    <>
    {/* using Helmet to inject metadata dynamically as route/pages change - its done cos React is a SPA and only has one index.html- This is called page level SEO metadata management */}
    <Helmet>
        <title>About Complii - Sustainability Insights</title>
        <meta name="description" content="Learn about Complii's mission and team driving data-backed sustainability solutions for businesses." />
    </Helmet>

    <section>
        {/* About Hero */}
       <div className='flex flex-col lg:flex-row'>
            {/* About img */}
            <div className='lg:w-1/2 h-162 hero lg:mx-auto lg:items-center'>
                <img src={AboutImg} alt="" className='lg:pt-30'/>
            </div>
            <div className='px-5 py-8 md:px-35 md:py-20 lg:w-1/2 lg:px-20 lg:py-50'>
                <span className='text-xl md:2xl xl:text-3xl text-slate-800 lg:w-1/2'>Our mission</span>
                <h1 className='text-[25px] md:text-3xl md:text-semibold 2xl:text-5xl font-semibold'>We are big on practices that improves the overall tragjectory or any brand, business that focused and all about unveiling what real data can do for them now and in the future</h1>
                <button className="bg-black w-full text-white py-3 px-6 text-base md:text-2xl hover:bg-slate-300 hover:text-black transition md:py-3 mt-5 font-semibold lg:text-xl lg:w-1/2">
                ▪ Meet the team
                </button>
            </div>
       </div>

       {/* About Values session */}
       <div>
            <div className=''>
                <h1 className=' text-center text-3xl md:text-3xl 2xl:text-3xl font-semibold pt-10'>Our values
            </h1>
            </div>
            <div className="py-10 grid gap-6 lg:grid-cols-3 2xl:w-1/2 2xl:mx-auto p-4">
                {contentList.map((content, index) => {
                {/* Icon-variable is treated is rendered as a component and rendered - dynamic component rendering*/}
                const Icon = content.icon;

                return (
                    <div key={index} className="bg-[#f5f7fa] rounded-xl py-8 px-5 md:px-8 flex flex-col">
                        {/* Instantiate(turns component reference into actual JSX element react can render) icons after storing in data(container) in the array*/}
                        <Icon className="text-3xl mb-2 md:text-4xl text-black 2xl:text-5xl" />
                        <h3 className="text-xl font-semibold md:text-xl 2xl:text-3xl">
                            {content.title}
                        </h3>
                        <p className="text-black text-lg md:text-xl 2xl:text-2xl">
                            {content.description}
                        </p>
                        
                    </div>
                    
                );
                })}
            </div>

       </div>

        {/* Founded's Story */}
        <div>
            <div className='p-5 md:flex md:gap-10 md:py-8 lg:px-5 lg:py-30'>
            {/* Testimonial Image */}
            <div className='lg:w-1/2 md:w-[50%]'>
                <img src={AboutImgTwo} alt="Testimonial" />
            </div>
            <div className='lg:w-1/2 md:w-[50%] md:mt-10  xl:content-center'>
                <div className='py-2 lg:px-12'>
                    <span className='text-xl text-slate-600'>Founder's story</span>
                    <h1 className='text-2xl md:text-3xl font-semibold lg:text-5xl'>Gregory Redwood</h1>
                    <p className='text-lg md:text-2xl pt-5 md:w-[90%]'>Greogry start Complii as a medium by which companies can finally harness the true might of data backed insight. He set out to be a light that shine rays that springs growths for companies. Its all about being ahead with data that guards the every step your company take in its industry.</p>
                    <span className='text-slate-700'>CEO, Complii Inc.</span>
                </div>
                
            </div>
        </div>
        </div>

        {/* Teams */}
        <div className='bg-[#f5f7fa]'>
            <div className='p-5'>
                <h1 className='text-4xl md:text-5xl 2xl:text-4xl font-semibold md:py-10'>Meet the team
            </h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 2xl:w-1/2 2xl:mx-auto">
                {teamMembers.map((person, index) => {
                {/* Icon-variable is treated is rendered as a component and rendered - dynamic component rendering*/}

                return (
                    <div key={index} className="py-2 px-5 flex flex-col">
                        {/* Instantiate(turns component reference into actual JSX element react can render) icons after storing in data(container) in the array*/}
                        <span className="text-2xl font-semibold md:text-xl 2xl:text-3xl">
                            {person.name}
                        </span>
                        <h2 className="text-black text-lg md:text-lg 2xl:text-2xl">
                            {person.role}
                        </h2>
                        <h2 className="text-black text-lg md:text-lg 2xl:text-2xl underline pb-4">
                            {person.email}
                        </h2>
                        <hr className='text-slate-200 lg:pt-2 2xl:pt-20'/>
                    </div>
                );
                })}
            </div>

       </div>

        {/* About Newsletter */}
        <div className="text-center py-20 bg-slate-100 ">
            <h2 className="text-2xl lg:text-4xl md:text-4xl font-bold text-center py-2">
            Want to join the team ?
            </h2>
            <div className="text-center">
                <button className="bg-black text-white py-2 px-6 text-base md:text-2xl hover:bg-slate-300 hover:text-black transition md:py-3">
                ▪ View open roles
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default About