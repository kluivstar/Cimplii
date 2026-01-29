import { Helmet } from "react-helmet";
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
    {/* using Helmet to inject metadata dynamically as route/pages change - its done cos React is a SPA and only has one index.html- This is called page level SEO metadata management */}
    <Helmet>
        <title>Complii — Sustainability Insights for Modern Businesses</title>
        <meta
          name="description"
          content="Measure impact, cut emissions, and drive sustainability progress with confidence using Complii."
        />
    </Helmet>

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
