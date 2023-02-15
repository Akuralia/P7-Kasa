import React from "react";
import Navbar from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Accordion from "../components/Accordion"
import { useLoaderData} from 'react-router-dom'



export default function About() {
    const data = useLoaderData();
    return(
        <>
        <Navbar />
        <Banner className="about_banner" />
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