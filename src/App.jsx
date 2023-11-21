import { useState } from 'react'
import './App.css'
import PhrasesBox from './components/PhrasesBox'
import phrases from "./db/phrases.json"
import { getRandomElement } from './utils/random'
const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(phrases))
  const handleChangeQuote = () => {
    setQuote(getRandomElement(phrases))
    setScreen(getRandomElement(bgs))
  }

  const [screen, setScreen] = useState(getRandomElement(bgs))

  return (
    <main className={`totalScreen ${screen}`}>
      <PhrasesBox quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )

}

export default App
