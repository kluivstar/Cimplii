import Links from "../footer/Links";
import FooterImg from "../../assets/content-background.png";

export default function Footer() {
  return (
    <footer className="bg-amber-200">
      <div className="px-10 py-10 flex flex-col items-center gap-4">
        <div>
          <Links/>
          <p className="text-base">© {new Date().getFullYear()} Cimplii. All rights reserved.</p>
        </div>
        <img src={FooterImg} className="w-full h-25" alt="Footer Image" />
        <h1 className="text-[85px] -mt-8 font-bold text-slate-900 -mb-10">Cimplii</h1>
      </div>
    </footer>
  )
}
