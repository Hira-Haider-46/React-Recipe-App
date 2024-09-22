import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => {
                setShowMenu(true);
            }, 700); 
        } else {
            setShowMenu(false);
            setTimeout(() => {
                setIsOpen(false);
            }, 300);
        }
    };

    const handleLinkClick = () => {
        setShowMenu(false);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setIsOpen(false); 
                setShowMenu(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav>
            <h1><Link to="/">Recipe App</Link></h1>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`bg ${isOpen ? 'open' : ''}`}></div>
            {showMenu && (
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
            )}
        </nav>
    );
}

export default Navbar;