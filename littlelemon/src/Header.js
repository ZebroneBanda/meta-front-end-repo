import logo from './img/logo.svg';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo"/>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reserve">Reservations</Link></li>
                        <li><Link to="/order">Order-online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}