import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const currentDate = new Date();

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'long',
  }).format(count * 1000 * 60 * 60 * 24 + currentDate.getTime());

  function handleStepDecr() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div className='App'>
      <div className='step'>
        <button onClick={handleStepDecr}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className='count'>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}

export default App;
