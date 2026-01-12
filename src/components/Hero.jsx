import Button from "./ui/Button";
import HeroImg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <section className="hero px-5">
      <div className="text-center py-8 h-100">
        {/* Hero Text */}
        <div className="">
          <h2 className="text-[29px] tracking-wide">Sustainability insights,</h2>
        <h2 className="text-3xl font-semibold">
        built for business</h2>
        </div>
        <p className="text-[16px] mt-2 font-semibold px-5">
          Track impact, reduce emissions and achieve sustainability goals with ease, just clarity
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
