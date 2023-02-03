import { useLoaderData, Link } from 'react-router-dom'

import '../styles/Cards.scss'

export default function Cards() {
    const data = useLoaderData()
    const lodgignLink = "/logement/"
    return (

            <div className='lodging_container'>
                {data.map( lodging => (
                <div className="lodging_card">
                    <Link to={'/logement/'+ lodging.id} key={lodging.id}>
                        <img src={lodging.cover} alt={lodging.title}></img>
                        <div><p>{lodging.title}</p></div>
                    </Link>
                </div>
                ))}
            </div>
        )
}