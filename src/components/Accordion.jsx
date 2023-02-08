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
      <div className="accordion_title" onClick={handleToggle}>
        {title} <img className="accordion_icon" src={Arrow} alt="arrow"/>
      </div>
      <div className="accordion_content">{content}</div>
    </div>
  )
}

export default Accordion