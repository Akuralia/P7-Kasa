import React from "react";
import { Link } from 'react-router-dom'

export default function Card({title, src, alt, path}) {
    return (
                <div className="lodging_card">
                    <Link 
                    to={path} 
                    >
                        <img src={src} alt={alt} />
                        <div><p>{title}</p></div>
                    </Link>
                </div>
        )
}