import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <>
    {/* Layout container for all pages - Shared shell */}
      <Navbar />
      {/* Renders current page content */}
      <Outlet />
      <Footer />
    </>
  );
}
