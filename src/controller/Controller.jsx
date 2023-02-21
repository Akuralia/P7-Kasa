import lodgingData from '../assets/lodging.json'
import aboutData from '../assets/about.json'

export function getLodgings(){
    return lodgingData;
}

export function getOneLodging(id){
    if (!id) return undefined;

    return lodgingData.find((lodging) => lodging.id === id);
}

export function getAbout() {
    return aboutData;
}









