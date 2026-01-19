import Button from "./ui/Button";
import HeroImg from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="hero px-5 lg:px-10">
      <div className="text-center py-8 h-140 md:h-160 lg:h-140">
        {/* Hero Text */}
        <div className="flex flex-col md:gap-5">
          <h2 className="text-[29px] md:text-6xl leading-5 tracking-wide lg:tracking-normal md:mt-10">Sustainability insights,</h2>
          <h2 className="text-3xl font-semibold md:text-6xl">
        for modern businesses</h2>
        </div>
        <p className="text-[16px] mt-2 font-semibold px-5 md:text-xl">
          Measure impact, cut emissions, and make sustainability progress with confidence.
        </p>
        <Button />
        {/* Hero Image */}
        <div className="mt-5 md:mt-0 lg:px-20 lg:-mt-38">
          <img src={HeroImg} className="outline-black" alt="" />
        </div>
      </div>
    </section>
  )
}
