import { Link } from 'react-router-dom'
import { useGame } from '../components/GameContext.jsx'
import { Card, PrimaryButton } from '../components/UI.jsx'

export default function Home() {
  const { score, streak, unlocked, ttsEnabled, setTtsEnabled } = useGame()
  return (
    <div className="grid gap-6">
      <Card>
        <div className="flex items-center gap-4">
          <div className="text-5xl">🌟</div>
          <div>
            <h1 className="text-3xl font-extrabold">Leer & Verzamel!</h1>
            <p className="text-gray-600">Speel, leer woordjes en reken, en verzamel grappige figuren.</p>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <Link to="/woordjes"><PrimaryButton>📚 Woordjes</PrimaryButton></Link>
          <Link to="/rekenen"><PrimaryButton>🔢 Rekenen</PrimaryButton></Link>
          <Link to="/album"><PrimaryButton>⭐ Album</PrimaryButton></Link>
        </div>
      </Card>
      <Card className="flex items-center justify-between">
        <div className="flex gap-6">
          <Stat label="Score" value={score} />
          <Stat label="Reeks juist" value={streak} />
          <Stat label="Ontgrendeld" value={unlocked.length} />
        </div>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={ttsEnabled} onChange={e => setTtsEnabled(e.target.checked)} />
          <span className="font-semibold">🔊 TTS</span>
        </label>
      </Card>
    </div>
  )
}

function Stat({label, value}) {
  return (
    <div className="px-3 py-2 rounded-xl bg-primary/70">
      <div className="text-xs font-semibold">{label}</div>
      <div className="text-xl font-extrabold">{value}</div>
    </div>
  )
}
