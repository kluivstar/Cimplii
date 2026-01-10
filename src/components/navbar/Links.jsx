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
        title: "Get Started",
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
            <ul className="flex gap-4 items-center m-0 p-0 list-none">
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
        <nav className="">
            <img 
                src={toggle ? close : open}
                className="cursor-pointer transition-transform duration-300 ease-in-out" 
                alt="" 
                width={24}
                onClick={() => {setToggle(!toggle)}}
            />
        </nav>
    </header>

  )
}
