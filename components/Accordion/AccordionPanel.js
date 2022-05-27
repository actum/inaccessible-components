import { useState } from 'react';
import IconArrow from '../../assets/icon-arrow-up.svg'

export default function AccordionPanel({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseDown = () => setIsOpen(!isOpen)

  return (
    <div className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
      <div className="accordion__item-content">
        {text}
      </div>
      <header
        className="accordion__item-header"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-selected={isOpen ? 'true' : 'false'}
        onMouseDown={handleMouseDown}
      >
        <p className="accordion__item-text">{title}</p>
        <IconArrow className="accordion__item-icon"/>
      </header>
    </div>
  )
}
