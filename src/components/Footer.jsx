import React from "react";
import footer_logo from '../assets/img/footer_logo.svg';

export default function Footer({nameClass}) {
return(
    <>
    <footer className={nameClass}>
        <div>
        <img src={footer_logo} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
    </>
    )
}