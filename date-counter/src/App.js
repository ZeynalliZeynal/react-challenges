import { useState } from 'react'
import './App.css'
function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const currentDate = new Date()

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'long',
  }).format(count * 1000 * 60 * 60 * 24 + currentDate.getTime())

  function handleReset() {
    setStep(1)
    setCount(0)
  }

  return (
    <div className='App'>
      <div className='step'>
        {step}
        <input
          type='range'
          value={step}
          min={1}
          max={10}
          onChange={(e) => setStep(+e.target.value)}
        />
      </div>
      <div className='count'>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>
          <input
            type='text'
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </span>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <div className='date'>
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} day(s) ago was `}
        </span>
        <span>{dateFormat}</span>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
