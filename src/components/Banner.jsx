import React from "react";
import { useLocation } from 'react-router-dom';

import aboutBackground from '../assets/img/about_banner_background.jpg'
import aboutBackgroundMobile from '../assets/img/about_banner_background_mobile.jpg'


export default function Banner({className, content, alt, mobile, desktop}) {

        return(
            <>
            <div className={className} >
                <picture>
                    <source 
                    media="(max-width: 768px)"
                    srcSet={mobile}
                    />
                    <source 
                    media="(min-width: 769px)"
                    srcSet={desktop}
                    />
                    <img src="" alt={alt} />
                </picture>
                <p>{content}</p>
            </div>
            </>
            )
   
}