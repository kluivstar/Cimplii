import { useState } from "react";
import open from '../../assets/open.svg'
import close from '../../assets/close.svg'

const links = [
    {
        title: "Product",
        path: "/",
    },
    {
        title: "Journal",
        path: "/",
    },
    {
        title: "About",
        path: "/",
    },
    {
        title: "Careers",
        path: "/",
    },
    {
        title: "Get Started ↦",
        path: "/",
    },
];

export default function Links() {
    // Toggle state for menu icon
    const [toggle, setToggle] = useState(false);
    
  return (
    <header>
        {/* Default - Desktop Menu */}
        <nav className="hidden">
            <ul className="flex items-center m-0 p-0 list-none">
                {links.map((link) => (
                <li key={link.title}>
                    <a
                    href={link.path}
                    className="hover:text-blue-600 transition-colors duration-300"
                    >
                    {link.title}
                    </a>
                </li>
                ))}
            </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <nav className="xl:hidden">
            <img 
                src={toggle ? close : open}
                className="cursor-pointer transition-transform duration-300 ease-in-out" 
                alt="" 
                width={24}
                onClick={() => {setToggle(!toggle)}}
            />
        </nav>

        {/* Mobile Menu Links*/}
        {toggle && (
            <nav className="xl:hidden absolute top-18 left-0 bg-white shadow-lg px-5 w-full z-10 h-[calc(100vh-100px)] leading-10  py-10">
                <ul className="flex flex-col items-start p-2 list-none space-y-3">
                    {links.map((link) => (
                        <li key={link.title}>
                            <a
                                href={link.path}
                                className="hover:text-blue-600 transition-colors hover:underline text-[15px] text-black duration-300"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )}

    </header>

  )
}
