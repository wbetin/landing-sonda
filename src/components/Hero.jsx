import React from 'react';
import '../styles/Hero.css';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
    const scrollToProducts = () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero-section">
            <ParticlesBackground />
            <div className="hero-content">
                <h1 className="hero-title">
                    O Futuro da <br />
                    <span>Gestão Tributária</span>
                </h1>
                <p className="hero-subtitle">
                    Soluções fiscais inteligentes para impulsionar a conformidade e o crescimento do seu negócio com a tecnologia SONDA.
                </p>
                <button onClick={scrollToProducts} className="btn-cta glow-hover">
                    Conheça Nossas Soluções
                </button>
            </div>
        </section>
    );
};

export default Hero;
