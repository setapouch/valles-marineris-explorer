import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-black text-white">
        {/* Navigace */}
        <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
                VM Explorer
              </Link>
              
              <div className="flex gap-6">
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Domů
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  O projektu
                </Link>
                <Link to="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Galerie
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Obsah stránky podle URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App