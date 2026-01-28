import Hero from "../components/Hero";
import Features from "../components/Features";
import Content from "../components/Content";
import CaseStudy from "../components/CaseStudy";
import Journal from "../components/Journal";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import "../index.css"

export default function Home() {
  return (
    <>
    {/* Page content */}
      <Hero />
      <Features />
      <Content />
      <CaseStudy />
      <Journal />
      <Testimonial />
      <CTA />
    </>
  );
}
