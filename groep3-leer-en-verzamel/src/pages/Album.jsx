import { Card } from '../components/UI.jsx'
import { useGame } from '../components/GameContext.jsx'
import { figures } from '../data/figures.js'

export default function Album(){
  const { unlocked } = useGame()
  return (
    <div className="grid gap-4">
      <Card>
        <h2 className="text-2xl font-extrabold">Verzamelalbum</h2>
        <p className="text-gray-600">Ontgrendelde figuren: {unlocked.length}/{figures.length}</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {figures.map(f => {
            const isUnlocked = unlocked.includes(f.id)
            return (
              <div key={f.id} className={"rounded-2xl border p-3 bg-white shadow relative " + (isUnlocked? "" : "opacity-50")}>
                {!isUnlocked && <div className="absolute right-2 top-2 text-xl">🔒</div>}
                <img src={f.img} alt={f.name} className="w-full h-28 object-contain mx-auto" />
                <div className="mt-2 font-bold">{f.name}</div>
                <div className="text-sm">Rarity: {f.rarity}</div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
