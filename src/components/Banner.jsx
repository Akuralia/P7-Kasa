import React from "react";
import { useLocation } from 'react-router-dom';
import homeBackground from '../assets/img/home_banner_background.jpg'
import aboutBackground from '../assets/img/about_banner_background.jpg'
import aboutBackgroundMobile from '../assets/img/about_banner_background_mobile.jpg'

export default function Banner({className}) {
    const location = useLocation()
    let background = undefined;
    let windowWidth = window.innerWidth;


    if(location.pathname === "/"){
        background = homeBackground;
        return(
            <>
            <div className='banner' >
                <img src={background} alt="home banner background" />
                <p> Chez vous, partout et ailleurs</p>
            </div>
            </>
            )
    } else if(location.pathname === "/about" && windowWidth > 768){
        background = aboutBackground;
        return(
            <>
            <div className='about_banner' >
                <img src={background} alt="about banner background" />
            </div>
            </>
            )
    } else {
        background = aboutBackgroundMobile;
        return(
            <>
            <div className='about_banner' >
                <img src={background} alt="about banner background" />
            </div>
            </>
            )
    }
}