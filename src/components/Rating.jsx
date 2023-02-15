import React from "react";
import FullStar from '../assets/img/Full_star.svg'
import EmptyStar from '../assets/img/Empty_star.svg'


export default function Rating({ratingScore}) {
    const maxRatingScore = 5;
    const rating =  Array.from({length: maxRatingScore}, (_, index) => {
        if(index < ratingScore){
            return(
                <img
                key={index}
                src={FullStar}
                alt='Full Star'
                className='rating_star'
                />
            );
        } else {
            return(
                <img
                key={index}
                src={EmptyStar}
                alt='Empty Star'
                className='rating_star'
                />
                );
    }
    });
    return <div className="rating_container">{rating}</div>;
}