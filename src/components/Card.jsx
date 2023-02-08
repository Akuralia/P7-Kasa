import React from "react";
import { NavLink } from 'react-router-dom'

export default function Card({title, src, alt, path}) {
    return (
                <div className="lodging_card">
                    <NavLink 
                    to={path} 
                    >
                        <img src={src} alt={alt} />
                        <div><p>{title}</p></div>
                    </NavLink>
                </div>
        )
}