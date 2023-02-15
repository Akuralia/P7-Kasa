import React from "react";

export default function Host({ title, location}){
    return(
            <div className="lodging_infos">
                <h1>{ title }</h1>
                <p>{ location }</p>
            </div>
        )
}