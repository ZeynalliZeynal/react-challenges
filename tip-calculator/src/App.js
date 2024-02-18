import { useState } from 'react'

export default function App() {
  return (
    <>
      <TipCalculator />
    </>
  )
}

function TipCalculator() {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const tip = Math.floor((bill * (percentage1 + percentage2)) / 2 / 100)

  function handleReset() {
    setBill('')
    setPercentage1(0)
    setPercentage2(0)
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        you
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        your friend
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor='billInput'>How much was the bill?</label>
      <input
        type='number'
        placeholder='Bill value'
        id='billInput'
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  )
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label htmlFor='select'>How did {children} like the service?</label>
      <select
        id='select'
        value={percentage}
        onChange={(e) => onSelect(+e.target.value)}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill ? bill : 0} + ${tip} tip)
    </h3>
  )
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>
}
