import JournalImgOne from "../assets/journal-image1.jpg";
import JournalImgTwo from "../assets/journal-image2.jpg";
import JournalImgThree from "../assets/journal-image3.jpg";
import JournalImgFour from "../assets/journal-image4.jpg";
import JournalImgFive from "../assets/journal-image5.jpg";
import JournalImgSix from "../assets/journal-image6.jpg";

const journalList = [
  {
    image: JournalImgOne,
    title: "Why Better Data Leads to Better Business Decisions",
    description:
      "Clarity in data reduces risk and increases confidence. Learn how trusted insights help teams make smarter, faster decisions.",
    genre: "Article",
    readTime: 5
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
    image: JournalImgThree,
    title: "From Strategy to Progress: Making Change Practical",
    description:
      "Real progress comes from execution, not perfection. See how businesses can turn sustainability goals into measurable outcomes.",
    genre: "Business",
    readTime: 10
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
    image: JournalImgFive,
    title: "Nothing Drives Growth Like Data-Driven Decisions",
    description:
      "Every decision backed by data propels your business forward with confidence and clarity.",
    genre: "Article",
    readTime: 6
  },
  {
    image: JournalImgSix,
    title: "Real Data for Real Business Impact",
    description:
      "All-in-one sustainability solutions that deliver measurable results for modern businesses.",
    genre: "News",
    readTime: 8
  },
];

export default function Journal() {
  return (
    <>
    {/* using Helmet to inject metadata dynamically as route/pages change - its done cos React is a SPA and only has one index.html- This is called page level SEO metadata management */}
    <Helmet>
        <title>Journal — Insights & Analysis for Business Leaders | Complii</title>
        <meta
          name="description"
          content="Explore articles, tools, and insights on sustainability, data-driven decisions, and long-term business growth."
        />
     </Helmet>

    <section className="py-10 px-5">
      {/* Journal Header */}
      <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-center py-5">
        From the Journal
      </h2>

      {/* Journal Content */}
      <div className="lg:px-50 2xl:w-3/4 2xl:content-center 2xl:flex">
        {journalList.map((journal, index) => (
          <div key={index}>
            {/* Top divider */}
            <hr className="border-slate-300" />

            <article className="py-5 md:flex md:gap-5">
              {/* Image */}
              <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-48 object-cover md:w-1/3 md:h-auto md:shrink-0"
              />

              {/* Text */}
              <div className="pt-4 space-y-2">
                <h3 className="text-base md:text-xl xl:text-2xl font-semibold">
                  {journal.title}
                </h3>

                <p className="text-sm text-black md:text-base xl:text-lg">
                  {journal.description}
                </p>

                <span className="text-xs md:text-base text-gray-500">
                  {journal.genre} · {journal.readTime} min read
                </span>
              </div>
            </article>

            {/* Bottom divider */}
            <hr className="border-slate-300" />
          </div>
        ))}
      </div>

      {/* Journal Button */}
      <div className="text-center mt-10">
        <button className="bg-black text-white py-2 px-6 text-sm hover:bg-slate-300 hover:text-black transition md:text-base">
          ▪ View all articles
        </button>
      </div>
    </section>
    </>
  );
}

