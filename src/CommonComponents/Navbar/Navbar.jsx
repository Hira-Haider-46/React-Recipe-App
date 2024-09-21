import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            <h1><Link to="/">Recipe App</Link></h1>
            <div className={`menu-toggle ${isOpen ? 'open bg' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={isOpen ? 'open' : ''}>
                <li>
                    <Link to="/recipes" onClick={handleLinkClick}>Recipes</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleLinkClick}>About</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;