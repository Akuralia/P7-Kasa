import React from 'react';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';
import Carrousel from '../components/Carrousel';
import InfosLodging from '../components/InfosLodging';
import Tag from '../components/Tag'
import Host from '../components/Host';
import Rating from '../components/Rating';
import Accordion from '../components/Accordion';
import Equipments from '../components/Equipments';
import { useLoaderData} from 'react-router-dom';

export default function Logement() {
    const data = useLoaderData();
    return(
        <>
        <Navbar  />
        <Carrousel pictures={data.pictures} />
        <div className='main_lodging_container'>
            <div className='infos_tags_container'>
                <InfosLodging title={data.title} location={data.location} />
                <div className='tags_container'>
                    {data.tags.map((tag) => (
                    <Tag key={tag} tagName={tag}/>
                    ))}
                </div>
            </div>
            <div className='rating_host_container'>   
                <Host host={data.host} />
                <Rating ratingScore={data.rating} />
            </div>
        </div>
        <div className='equipements_description_container'>
            <Accordion 
            title='Description'
            nameClassContent='lodging_description' 
            nameClassTitle='accordion_title_description_equipement'
            content={data.description} 
            />
            <Accordion 
            title='Équipements' 
            nameClassContent='lodging_equipements' 
            nameClassTitle='accordion_title_description_equipement'
            content=
            {
                data.equipments.map((equipments) =>
                <Equipments equipments={equipments}/>
                )
            } 
            />
        </div>
        <Footer />
        </>
        )
}