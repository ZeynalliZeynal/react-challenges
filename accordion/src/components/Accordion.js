import { useState } from 'react'

export default function Accordion({ data }) {
  return (
    <div className='accordion'>
      {data.map((item, i) => (
        <AccordionItem num={i} text={item.text} title={item.title} key={i} />
      ))}
    </div>
  )
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setisOpen] = useState(false)

  function handleClick() {
    setisOpen((isOpen) => !isOpen)
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{text}</div>}
    </div>
  )
}
