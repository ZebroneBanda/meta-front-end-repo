import logo from './logo.svg';

export default function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo"/>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}