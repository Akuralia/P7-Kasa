import { NavLink } from 'react-router-dom';

import logo from '../assets/img/logo.svg'
import '../styles/Navigation.scss'

export default function navbar() {

let activeStyle = {
    textDecoration: "underline",
};


return(
    <>
    <header>
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo Kasa" />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" className="nav_link" style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Acceuil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/a_propos" className="nav_link" style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
    </>
    )
}