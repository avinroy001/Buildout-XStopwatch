import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  setInterval(()=>{
    
  })

  return (
    <>
      <h1>Stopwatch</h1>
      <br/>
      <br/>
      <h3>Time:</h3>
      <br/>
      <button>Start</button> 
      <button>Reset</button>  
    </>
  )
}

export default App
