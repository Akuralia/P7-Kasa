import React from "react";
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';
import Carrousel from "../components/Carrousel";
import { Navigate, useParams } from "react-router";
import { useLoaderData} from 'react-router-dom';

export default function Logement() {

    const data = useLoaderData();
    const { id } = useParams();
    let lodgingData 

    if(id !== undefined) {
        lodgingData = data.find((lodging) => lodging.id === id)
        console.log(lodgingData);
        if (lodgingData === false || lodgingData === undefined){
            return <Navigate to="/404"/>
        }
    }


    return(
        <>
        <Navbar />
        <Carrousel pictures={lodgingData.pictures}/>
        <Footer />
        </>
        )

}