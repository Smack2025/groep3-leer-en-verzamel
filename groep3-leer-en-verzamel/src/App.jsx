import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Woordjes from './pages/Woordjes.jsx'
import Rekenen from './pages/Rekenen.jsx'
import Album from './pages/Album.jsx'
import { GameProvider } from './components/GameContext.jsx'

export default function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-bg">
        <nav className="sticky top-0 z-10 bg-bg/80 backdrop-blur border-b">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
            <Link to="/" className="font-extrabold text-xl">🌟 Leer & Verzamel!</Link>
            <div className="ml-auto flex gap-2">
              <Link className="px-4 py-2 rounded-2xl bg-secondary text-white font-bold shadow hover:brightness-110" to="/woordjes">📚 Woordjes</Link>
              <Link className="px-4 py-2 rounded-2xl bg-secondary text-white font-bold shadow hover:brightness-110" to="/rekenen">🔢 Rekenen</Link>
              <Link className="px-4 py-2 rounded-2xl bg-primary text-black font-bold shadow hover:brightness-110" to="/album">⭐ Album</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/woordjes" element={<Woordjes />} />
            <Route path="/rekenen" element={<Rekenen />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        </main>
      </div>
    </GameProvider>
  )
}
