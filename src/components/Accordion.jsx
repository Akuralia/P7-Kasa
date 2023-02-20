import React from "react"
import { useState } from "react"
import { useLocation } from 'react-router-dom';
import Arrow from '../assets/img/arrow_accordion.svg'

function Accordion({ title, content, nameClassContent, nameClassTitle }) {
  const [active, setActive] = useState(false)
  const handleToggle = e => {
    setActive(!active)
  }
  const location = useLocation();

  if(location.pathname === "/about"){
    return (
      <div className={`accordion ${active && "active"}`}>
        <div className={nameClassTitle} onClick={handleToggle}>
          {title} <img className="accordion_icon" src={Arrow} alt="arrow"/>
        </div>
        <div className={nameClassContent}>
          <p>{content}</p>
          </div>
      </div>
    )
  } else {
  return (
    <div className={`accordion ${active && "active"}`}>
      <div className={nameClassTitle} onClick={handleToggle}>
        {title} <img className="accordion_icon" src={Arrow} alt="arrow"/>
      </div>
      <div className={nameClassContent}>
        {content}
        </div>
    </div>
  )
  }

}

export default Accordion