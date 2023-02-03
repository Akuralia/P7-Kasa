import React from "react";
import { useLoaderData, NavLink } from 'react-router-dom'

export default function Cards() {
    const data = useLoaderData()
    return (
        <div className='lodging_container'>
            {data.map( lodging => (
                <div className="lodging_card">
                    <NavLink 
                    to={'logement/'+ lodging.id} 
                    key={lodging.id} end={true}>
                        <img src={lodging.cover} alt={lodging.title}></img>
                        <div><p>{lodging.title}</p></div>
                    </NavLink>
                </div>
                ))};
            </div>
        )
}