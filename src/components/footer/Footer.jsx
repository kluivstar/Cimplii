import Links from "../footer/Links";
import FooterImg from "../../assets/footer-image.png";

export default function Footer() {
  return (
    <footer className="bg-[#fff645]">
      <div className="px-10 py-10 lg:py-2 flex flex-col items-center gap-4 md:px-5">
        <div className="md:flex md:flex-row md:gap-24 lg:gap-85 md:justify-between">
          <Links/>
          <p className="text-base md:text-lg md:font-semibold text-[#2c2c0d] ">© {new Date().getFullYear()} Cimplii. All rights reserved.</p>
        </div>
        <img src={FooterImg} className="w-full h-25 md:h-60" alt="Footer Image" />
        <h1 className="text-[85px] -mt-8 font-bold text-[#2c2c0d] -mb-10 md:text-[250px] md:-mt-15">Cimplii</h1>
      </div>
    </footer>
  )
}
