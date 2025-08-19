import { useEffect, useState } from 'react'
import { exercises } from '../data/math.js'
import { Card, TileButton, PrimaryButton } from '../components/UI.jsx'
import { useGame } from '../components/GameContext.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] }
  return a
}

export default function Rekenen() {
  const [idx, setIdx] = useState(0)
  const [options, setOptions] = useState([])
  const [feedback, setFeedback] = useState('')
  const { addScore, incStreak, resetStreak, streak, speak, unlockRandom } = useGame()

  const item = exercises[idx % exercises.length]

  useEffect(()=>{
    const opts = shuffle([item.answer, ...item.distractors]).slice(0,3)
    setOptions(shuffle(opts))
    setFeedback('')
    speak(item.sum)
  },[idx])

  function next(){ setIdx(v=>v+1) }

  function pick(n){
    if (n === item.answer){
      setFeedback('✅ Goed gedaan!')
      addScore(10); incStreak(); speak('Goed gedaan!')
      if ((streak + 1) % 5 === 0) {
        const unlocked = unlockRandom()
        if (unlocked) setFeedback(`⭐ Ontgrendeld: ${unlocked.name}!`)
      }
      setTimeout(next, 600)
    } else {
      setFeedback('❌ Bijna! Kijk nog eens goed.')
      resetStreak(); speak('Probeer het nog eens. Kijk goed!')
    }
  }

  return (
    <div className="grid gap-4">
      <Card>
        <div className="flex items-center gap-3">
          <button className="text-2xl" onClick={()=>speak(item.sum)} aria-label="Herhaal">🔊</button>
          <h2 className="text-2xl font-extrabold">{item.sum}</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {options.map((n,i)=>(
            <TileButton key={i} onClick={()=>pick(n)}>{n}</TileButton>
          ))}
        </div>
        {feedback && <div className="mt-3 font-bold">{feedback}</div>}
        <div className="mt-4"><PrimaryButton onClick={next}>Volgende</PrimaryButton></div>
      </Card>
    </div>
  )
}
