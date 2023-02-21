import React from "react";
import Navbar from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Accordion from "../components/Accordion";
import aboutBackground from '../assets/img/about_banner_background.jpg'
import aboutBackgroundMobile from '../assets/img/about_banner_background_mobile.jpg'

import { useLoaderData} from 'react-router-dom';
import { getAbout } from "../controller/Controller";

export async function aboutLoader(){
    return await getAbout()
} 

export function About() {
    const data = useLoaderData();
    return(
        <>
        <Navbar />
        <Banner className="about_banner" mobile={aboutBackgroundMobile} desktop={aboutBackground} />
        <div className="accordions">
            {data.map((about, index) => (
                <Accordion 
                    title={about.header} 
                    content={about.description} 
                    key={index}
                    nameClassContent={`accordion_content nbr_${index}`}
                    nameClassTitle='accordion_title_about'
                    >
                </Accordion>
            ))}
        </div>
        <Footer nameClass='about_footer'/>
        </>
    )

}