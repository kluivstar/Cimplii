import React from 'react'
import JournalImgOne from "../assets/journal-image1.jpg";
import JournalImgTwo from "../assets/journal-image2.jpg";
import JournalImgThree from "../assets/journal-image3.jpg";
import JournalImgFour from "../assets/journal-image4.jpg";
import JournalImgFive from "../assets/journal-image5.jpg";
import JournalImgSix from "../assets/journal-image6.jpg";
import JournalHeader from "../assets/journal-header.jpg";

const journalList = [
  {
    image: JournalImgSix,
    title: "dsfa Data for Real Business Impact",
    description:
      "All-in-one sustainability solutions that deliver measurable results for modern businesses.",
    genre: "News",
    readTime: 8
  },
  {
    image: JournalImgTwo,
    title: "Sustainability as a Strategic Business Advantage",
    description:
      "Sustainability isn’t isolated from operations. Discover how connecting impact, performance, and accountability drives long-term value.",
    genre: "Tools",
    readTime: 8
  },
  
  {
    image: JournalImgOne,
    title: "Why Better Data Leads to Better Business Decisions",
    description:
      "Clarity in data reduces risk and increases confidence. Learn how trusted insights help teams make smarter, faster decisions.",
    genre: "Article",
    readTime: 5
  },
  {
    image: JournalImgFour,
    title: "Turning Insights into Scalable Business Growth",
    description:
      "Actionable insights unlock efficiency and growth. Learn how organizations use data to guide decisions that scale with impact.",
    genre: "Article",
    readTime: 5
  },
  {
    image: JournalImgThree,
    title: "From Strategy to Progress: Making Change Practical",
    description:
      "Real progress comes from execution, not perfection. See how businesses can turn sustainability goals into measurable outcomes.",
    genre: "Business",
    readTime: 10
  },
  {
    image: JournalImgFive,
    title: "Nothing Drives Growth Like Data-Driven Decisions",
    description:
      "Every decision backed by data propels your business forward with confidence and clarity.",
    genre: "Article",
    readTime: 6
  },
  
];

const JournalPage = () => {
  return (
    <section className="">
      <div className='p-4'>
            <img src={JournalHeader} alt="Journal image" className="w-full h-full object-contain mb-5"/>
      </div>
      {/* Journal Header */}
      <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-center py-5 lg:py-10">
        Latest articles
      </h2>

      {/* Journal Content */}
      <div className="lg:px-24 p-10 xl:py-10 xl:pb-20 2xl:w-4/5 grid lg:grid-cols-2 lg:gap-10 mx-auto items-stretch">

        {journalList.map((journal, index) => (
            <article
            key={index}
            className="h-full flex flex-col"
            >
            {/* Image */}
            <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-48 md:h-56 xl:h-90 object-cover"
            />

            {/* Text */}
            <div className="pt-4 space-y-2 flex-1">
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold">
                {journal.title}
                </h3>

                <p className="text-sm text-black md:text-lg">
                {journal.description}
                </p>

                <span className="text-base md:text-lg text-gray-500">
                {journal.genre} · {journal.readTime} min read
                </span>
            </div>
            </article>
        ))}
      </div>


      {/* Newsletter Section */}
      <div className="text-center py-20 bg-slate-100 ">
        <h2 className="text-2xl lg:text-4xl md:text-4xl font-bold text-center py-2">
        Subscribe to Complii Journal
      </h2>
        <div className="text-center">
            <button className="bg-black text-white py-2 px-6 text-base md:text-2xl hover:bg-slate-300 hover:text-black transition md:py-3">
            ▪ Sign up to newsletter
            </button>
        </div>
      </div>
    </section>
  )
}

export default JournalPage