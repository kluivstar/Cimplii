import Button from "./ui/Button";
import HeroImg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <section className="hero px-5">
      <div className="text-center py-8 h-140">
        {/* Hero Text */}
        <div className="">
          <h2 className="text-[29px] leading-5 tracking-wide">Sustainability insights,</h2>
          <h2 className="text-3xl font-semibold">
        for modern businesses</h2>
        </div>
        <p className="text-[16px] mt-2 font-semibold px-5">
          Measure impact, cut emissions, and make sustainability progress with confidence.
        </p>
        <Button />
        {/* Hero Image */}
        <div className="mt-5">
          <img src={HeroImg} className="outline-black" alt="" />
        </div>
      </div>
    </section>
  )
}
