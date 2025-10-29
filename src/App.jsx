import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MarsInfo from './MarsInfo'

function App() {
  const [count, setCount] = useState(100)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Valles marineris exporer </h1>
      <MarsInfo 
        title="Valles Marineris" 
        description="Největší kaňonový systém ve sluneční soustavě."
      />

      <MarsInfo 
        title="Ius Chasma" 
        description="Západní část Valles Marineris, dlouhá přes 900 km."
      />

      <MarsInfo 
        title="Melas Chasma" 
        description="Nejširší a nejhlubší část celého systému."
      />
      <MarsInfo />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
