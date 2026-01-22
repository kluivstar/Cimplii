import Button from "./ui/Button";
import HeroImg from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="hero px-5 lg:px-10 2xl:px-0">
      <div className="text-center py-8 h-112 md:h-160 lg:h-140 xl:h-170 2xl:h-190 2xl:py-20  ">
        {/* Hero Text */}
        <div className="flex flex-col md:gap-5">
          <h2 className="text-[29px] md:text-6xl xl:text-7xl leading-5 tracking-wide lg:tracking-normal md:mt-10 2xl:text-8xl">Sustainability insights,</h2>
          <h2 className="text-3xl font-semibold md:text-6xl xl:text-7xl 2xl:text-8xl">
        for modern businesses</h2>
        </div>
        
        <div>
          <p className="text-[16px] mt-2 font-semibold px-5 md:text-xl 2xl:text-2xl">
          Measure impact, cut emissions, and make sustainability progress with confidence.
          </p>
          <Button />
        </div>

        {/* Hero Image */}
        <div className="flex mt-5 md:mt-0 lg:px-20 2xl:px-0 lg:-mt-38 xl:ml-24 2xl:ml-0 2xl:justify-center">
          <img src={HeroImg} className="outline-black" alt="" />
        </div>
      </div>
    </section>
  )
}
