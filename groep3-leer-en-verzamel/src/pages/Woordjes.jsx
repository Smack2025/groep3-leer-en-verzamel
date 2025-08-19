import { useEffect, useMemo, useState } from 'react'
import { words } from '../data/words.js'
import { Card, PrimaryButton } from '../components/UI.jsx'
import { useGame } from '../components/GameContext.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] }
  return a
}

export default function Woordjes() {
  const [idx, setIdx] = useState(0)
  const [choices, setChoices] = useState([])
  const [feedback, setFeedback] = useState('')
  const { addScore, incStreak, resetStreak, streak, speak, unlockRandom } = useGame()

  const item = words[idx % words.length]

  useEffect(() => {
    const opts = shuffle(item.options).slice(0,3)
    // ensure correct present
    if (!opts.find(o => o.label === item.correct.label)) {
      opts[Math.floor(Math.random()*opts.length)] = item.correct
    }
    setChoices(shuffle(opts))
    setFeedback('')
    speak(item.woord)
  }, [idx])

  function next() { setIdx(v => v+1) }

  function onPick(ch) {
    if (ch.label === item.correct.label) {
      setFeedback('✅ Goed gedaan!')
      addScore(10); incStreak(); speak('Goed gedaan!')
      if ((streak + 1) % 5 === 0) {
        const unlocked = unlockRandom()
        if (unlocked) setFeedback(`⭐ Ontgrendeld: ${unlocked.name}!`)
      }
      setTimeout(next, 600)
    } else {
      setFeedback('❌ Probeer het nog eens. Kijk goed!')
      resetStreak(); speak('Probeer het nog eens. Kijk goed!')
    }
  }

  return (
    <div className="grid gap-4">
      <Card>
        <div className="flex items-center gap-3">
          <button className="text-2xl" onClick={()=>speak(item.woord)} aria-label="Herhaal">
            🔊
          </button>
          <h2 className="text-2xl font-extrabold">{item.woord}</h2>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {choices.map((c,i)=>(
            <button key={i} onClick={()=>onPick(c)} className="rounded-2xl bg-white shadow p-3 hover:scale-105 active:scale-95 transition">
              <img src={c.img} alt={c.label} className="w-full h-32 object-contain mx-auto" />
              <div className="mt-2 text-center font-semibold">{c.label}</div>
            </button>
          ))}
        </div>
        {feedback && <div className="mt-3 font-bold">{feedback}</div>}
        <div className="mt-4"><PrimaryButton onClick={next}>Volgende</PrimaryButton></div>
      </Card>
    </div>
  )
}
