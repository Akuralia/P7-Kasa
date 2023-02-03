import footer_logo from '../assets/img/footer_logo.svg';
import '../styles/Footer.scss'

export default function Footer() {
return(
    <>
    <footer>
        <div>
        <img src={footer_logo} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
    </>
    )
}