import './App.css'
import Features from './components/Features.jsx'
import Hero from './components/Hero.jsx'
import Journal from './components/Journal.jsx'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Content from './components/Content.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import Testimonial from './components/Testimonial.jsx'
import CTA from './components/CTA.jsx'

function App() {
  return (
    <div id="root">
      <Navbar />
      <Hero />
      <Features />
      <Content/>
      <CaseStudy/>
      <Journal />
      <Testimonial/>
      <CTA />
      <Footer />
    </div>
  )
}

export default App
