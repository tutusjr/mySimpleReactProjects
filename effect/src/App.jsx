
import './App.css'
import { useState } from 'react'

function App() {

  const [tutus, setTutus] = useState(0)
  const [karacan, setKaracan] = useState(0)
  return (
    <>
      <button onClick={() => setTutus(tutus + 1)}>tutus ++ </button>
      <div>tutus: {tutus}</div>
      <button onClick={() => setKaracan(karacan + 1)}>karacan ++ </button>
      <div>karacan: {karacan}</div>
    </>
  )
}

export default App
