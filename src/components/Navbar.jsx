import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="navbarLogo">
                <h1>FridgeQuestApp</h1>
            </div>
            <nav>
                <ul className={`navbarLinks ${isOpen ? 'Active' : ''}`}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                </ul>
            </nav>
            <button className="navbarToggle" onClick={toggleNavbar} aria-label="Toggle navigation">
                <span className="navbarBurgerMenu">&#9776;</span>
            </button>
        </header>
    );
};

export default Navbar;
