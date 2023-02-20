import React from "react";

export default function Host({ title, location}){
    return(
            <div className="lodging_infos">
                <p className="lodging_title">{ title }</p>
                <p className="lodging_location">{ location }</p>
            </div>
        )
}