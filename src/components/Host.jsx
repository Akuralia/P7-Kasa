import React from "react";

export default function Host({host}){
    return(
        <div className="lodging_host">
        <p>{ host.name }</p>
        <div className="host_picture">
        <img src={host.picture} alt={host.name} />
        </div>
    </div>
        )
}