import { useState } from 'react'

export default function Accordion({ data }) {
  const [curOpen, setcurOpen] = useState(null)

  return (
    <div className='accordion'>
      {data.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setcurOpen}
          num={i}
          title={item.title}
          key={i}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  )
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen

  function handleClick() {
    onOpen(isOpen ? null : num)
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  )
}
