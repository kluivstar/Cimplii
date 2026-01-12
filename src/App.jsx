import './App.css'
import Hero from './components/Hero.jsx'
import Journal from './components/Journal.jsx'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'

function App() {
  return (
    <div id="root">
      <Navbar />
      <Hero />
      <Journal />
      <Footer />
    </div>
  )
}

export default App
