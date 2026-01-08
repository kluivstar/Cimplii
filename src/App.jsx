import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Journal from './components/Journal.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Hero />
        <Journal />
      </main>
      <Footer />
    </div>
  )
}

export default App
