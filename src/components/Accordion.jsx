import React from "react"
import { useState } from "react"
import Arrow from '../assets/img/arrow_accordion.svg'

function Accordion({ title, content }) {
  const [active, setActive] = useState(false)

  const handleToggle = e => {
    setActive(!active)
  }
  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title" onClick={handleToggle}>
        {title} <img className="accordion__icon" src={Arrow}></img>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  )
}

export default Accordion