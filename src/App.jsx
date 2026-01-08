import { FiSmile } from 'react-icons/fi'
import './App.css'

function App() {
  return (
    <div id="root">
      <header>
        <h1>Cimplii</h1>
        <p className="tagline">A minimal React + Vite starter</p>
      </header>

      <main>
        <section className="hero bg-blue-500">
          <FiSmile size={64} aria-hidden="true" />
          <p className='text-3xl font-bold underline'>Welcome — edit <code>src/App.jsx</code> to get started.</p>
        </section>
      </main>
    </div>
  )
}

export default App
