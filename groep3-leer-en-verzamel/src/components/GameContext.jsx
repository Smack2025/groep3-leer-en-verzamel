import React, {createContext, useContext, useEffect, useState} from 'react'
import { figures } from '../data/figures.js'

const GameCtx = createContext(null)

const LS_KEY = 'leer-verzamel-state-v1'

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(LS_KEY))
    if (!s) return null
    return s
  } catch (e) { return null }
}
function saveState(state) {
  localStorage.setItem(LS_KEY, JSON.stringify(state))
}

export function GameProvider({children}) {
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [unlocked, setUnlocked] = useState([]) // figure ids
  const [ttsEnabled, setTtsEnabled] = useState(true)

  useEffect(() => {
    const s = loadState()
    if (s) {
      setScore(s.score || 0)
      setStreak(s.streak || 0)
      setUnlocked(s.unlocked || [])
      setTtsEnabled(s.ttsEnabled ?? true)
    }
  }, [])

  useEffect(() => {
    saveState({score, streak, unlocked, ttsEnabled})
  }, [score, streak, unlocked, ttsEnabled])

  function addScore(points=10) { setScore(v => v + points) }
  function resetStreak() { setStreak(0) }
  function incStreak() { setStreak(v => v + 1) }

  function unlockRandom() {
    const locked = figures.filter(f => !unlocked.includes(f.id))
    if (locked.length === 0) return null
    // rarity weights
    const weight = (r) => r==='Epic'?5 : r==='Rare'?25 : 70
    const pool = []
    locked.forEach(f => { const w = weight(f.rarity); for (let i=0;i<w;i++) pool.push(f) })
    const pick = pool[Math.floor(Math.random()*pool.length)]
    setUnlocked(list => list.includes(pick.id)? list : [...list, pick.id])
    return pick
  }

  function speak(text) {
    if (!ttsEnabled) return
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        const u = new SpeechSynthesisUtterance(text)
        u.lang = 'nl-NL'
        u.rate = 0.95
        window.speechSynthesis.speak(u)
      }
    } catch {}
  }

  return (
    <GameCtx.Provider value={{score, streak, unlocked, addScore, resetStreak, incStreak, unlockRandom, speak, ttsEnabled, setTtsEnabled}}>
      {children}
    </GameCtx.Provider>
  )
}

export function useGame() { return useContext(GameCtx) }
