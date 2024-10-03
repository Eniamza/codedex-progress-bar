import { useState } from 'react'
import ProgressBar from './ProgressBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    if(count < 100) {
      setCount(count + 10)
    }
    if(count === 100) {
      setCount(0)
    }
  }

  return (
    <div className="App">
      <ProgressBar progress={count} increaseCount={increaseCount}/>
      </div>
  )

}

export default App
