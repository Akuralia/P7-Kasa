import React from "react";
import Navbar from '../components/Navigation';
import AboutBanner from '../components/Banner-about';
import Footer from '../components/Footer';
import Accordion from "../components/Accordion"
import { useLoaderData} from 'react-router-dom'



export default function Apropos() {
    const data = useLoaderData();
    console.log(data)
    return(
        <>
        <Navbar />
        <AboutBanner />
        <div className="accordions">
            {data.map( about => (
            <div className="accordions">
                <Accordion 
                    title={about.header} 
                    content={about.description} 
                    key={about.id}>
                </Accordion>
            </div>
            ))};
        </div>
        <Footer />
        </>
    )

}