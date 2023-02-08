import React from "react";
import Navbar from '../components/Navigation';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useLoaderData} from 'react-router-dom';






export default function Home() {
    const data = useLoaderData();
    return(
        <>
        <Navbar />
        <Banner className="banner" />
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
        <Footer />
        </>
    )
}