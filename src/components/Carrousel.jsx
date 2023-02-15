import React, { useState } from "react";
import arrowPrevious from '../assets/img/arrow_previous.svg'
import arrowNext from '../assets/img/arrow_next.svg'

export default function Carrousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousPicture = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex < 0 ? pictures.length - 1 : newIndex);
      };
    
      const nextPicture = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex >= pictures.length ? 0 : newIndex);
      };
      
    return(    
        <div className="carrousel_container">
                <img src={pictures[currentIndex]} alt = {pictures}/>
                {pictures.length > 1 ? (
                  <>
                    <span className="pictures_counter">
                      {currentIndex + 1}/{pictures.length}
                    </span>
                    <img src={arrowPrevious} alt="arrow"  onClick={previousPicture} className="arrow_previous" />
                    <img src={arrowNext} alt="arrow" onClick={nextPicture} className="arrow_next" />
                  </>
            ) : null}
        </div>);

}