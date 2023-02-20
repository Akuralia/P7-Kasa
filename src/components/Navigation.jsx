import React from "react";
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg'

export default function navbar() {

let activeStyle = {
    textDecoration: "underline",
};


return(
    <>
    <header>
        <nav>
            <div className='logo'>
                <Link to ='/'>
                <img src={logo} alt="logo Kasa" />
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" className="nav_link" style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav_link" style={({isActive}) =>
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