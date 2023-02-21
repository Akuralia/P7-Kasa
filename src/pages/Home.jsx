import React from "react";
import Navbar from '../components/Navigation';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import homeBackground from '../assets/img/home_banner_background.jpg'
import { useLoaderData} from 'react-router-dom';
import { getLodgings } from "../controller/Controller";


export async function homeLoader(){
    return await getLodgings()
}


export function Home() {
    const data = useLoaderData();
    return(
        <>
        <Navbar />
        <Banner 
        className="banner" 
        desktop={homeBackground} 
        mobile={homeBackground} 
        alt="home background"
        content="Chez vous, partout et ailleurs"/>
        <main>
        <div className="lodging_container">
            {data.map((lodging) => (
                <Card 
                    path={'logement/'+ lodging.id}
                    key={lodging.id}
                    src={lodging.cover}
                    alt={lodging.title}
                    title={lodging.title}
                    >
                </Card>
            ))}
        </div>
        </main>
        <Footer />
        </>
    )
}