import lodgingData from '../assets/lodging.json'
import aboutData from '../assets/about.json'
import { Navigate } from "react-router";



function getLodgings(){
    return lodgingData;
}

function getOneLodging(id){
    let oneLodging = undefined;

    if(id !== undefined) {
        oneLodging = lodgingData.find((lodging) => lodging.id === id);
        return oneLodging;
    } else if(oneLodging === false || oneLodging === undefined){
        return <Navigate to="/404"/>
    }
}


export async function lodgingsLoader() {
    const dataLodgings = await getLodgings();
    return dataLodgings;
}

export async function lodgingLoader({params}) {
    const id = params.id;
    const dataLodging = await getOneLodging(id);
    return dataLodging
}

export function aboutLoader() {
    return aboutData
}





