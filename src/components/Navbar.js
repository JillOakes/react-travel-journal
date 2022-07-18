import logo from '../images/globe.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="globe" className='logo'/>
            <h3 className='siteTitle'>my travel journal.</h3>
        </nav>
    )
}