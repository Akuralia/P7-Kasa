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
                    key={index}>
                </Accordion>
            ))}
        </div>
        <Footer />
        </>
    )

}