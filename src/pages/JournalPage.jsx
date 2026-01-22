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
    title: "Real Data for Real Business Impact",
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
    <section className="p-4">
      <div>
            <img src={JournalHeader} alt="Journal Header" className="w-full h-full object-contain mb-5"/>
      </div>
      {/* Journal Header */}
      <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-center py-5">
        Latest articles
      </h2>

      {/* Journal Content */}
      <div className="lg:px-50 2xl:w-3/4 2xl:content-center 2xl:flex">
        {journalList.map((journal, index) => (
          <div key={index}>
            {/* Top divider */}

            <article className="py-5 md:flex-col md:gap-5">
              {/* Image */}
              <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-48 object-cover md:w-full md:h-auto md:shrink-0"
              />

              {/* Text */}
              <div className="pt-4 space-y-2">
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold">
                  {journal.title}
                </h3>

                <p className="text-sm text-black md:text-lg xl:text-lg">
                  {journal.description}
                </p>

                <span className="text-base md:text-lg text-gray-500">
                  {journal.genre} · {journal.readTime} min read
                </span>
              </div>
            </article>

          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="text-center py-10">
        <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-center py-2">
        Subscribe to Complii Journal
      </h2>
        <div className="text-center">
            <button className="bg-black text-white py-2 px-6 text-sm hover:bg-slate-300 hover:text-black transition md:text-base">
            ▪ Sign up to newsletter
            </button>
      </div>
      </div>
    </section>
  )
}

export default JournalPage