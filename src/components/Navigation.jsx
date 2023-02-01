import logo from '../assets/img/logo.svg'
import '../styles/Navigation.scss'

export default function navbar() {
return(
    <>
    <header>
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo Kasa" />
            </div>
            <div>
                <ul>
                    <li><a href='#'>Acceuil</a></li>
                    <li><a href='#'>A Propos</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
    )
}