import lodgingData from '../assets/lodging.json'
import aboutData from '../assets/about.json'

export function aboutLoader() {
    return aboutData;
}

export function lodgingsLoader(){
    return lodgingData;
}

function getOneLodging(id){
    if (!id) return undefined;

    return lodgingData.find((lodging) => lodging.id === id);
}

export async function lodgingLoader({params}) {
    return await getOneLodging(params.id);
}






