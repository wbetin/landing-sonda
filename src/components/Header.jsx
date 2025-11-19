import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <img
                        src={scrolled ? "/images/sonda-logo.png" : "/images/logo-sonda.png"}
                        className="logo-image"
                        alt="Logo Sonda"
                    />
                </div>
                <nav>
                    <ul>
                        <li><a href="#contact" className="btn-contact">Orçamento</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
