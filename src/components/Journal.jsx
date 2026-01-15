import JournalImgOne from "../assets/journal-image1.jpg";
import JournalImgTwo from "../assets/journal-image2.jpg";
import JournalImgThree from "../assets/journal-image3.jpg";
import JournalImgFour from "../assets/journal-image4.jpg";

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
];

export default function Journal() {
  return (
    <section className="py-10 px-5">
      {/* Journal Header */}
      <h2 className="text-2xl font-bold text-center py-5">
        From the Journal
      </h2>

      {/* Journal Content */}
      <div className="space-y-5">
        {journalList.map((journal, index) => (
          <article
            key={index}
            className="bg-white overflow-hidden"
          >
            {/* Image */}
            <img
              src={journal.image}
              alt={journal.title}
              className="w-full h-48 object-cover"
            />

            {/* Text */}
            <div className="py-5 space-y-2">
              <h3 className="text-base font-semibold">
                {journal.title}
              </h3>
              <p className="text-sm text-black">
                {journal.description}
              </p>

              {/* Genre and Read Time */}
              <div>
                <span className="text-xs text-gray-500">{journal.genre} · {journal.readTime} min read</span>
              </div>
              <hr className='text-slate-400'/>
            </div>

            {/* Journal Button */}
            <div className='mx-auto text-center'>
                <button className="bg-black w-full text-white px-15 py-2 text-[15px] hover:bg-slate-300 hover:text-black">▪ view all articles</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
