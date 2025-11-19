import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [selectedProduct, setSelectedProduct] = useState('Comply e-DOCS');

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to external form based on product selection
        const formUrls = {
            'Comply e-DOCS': 'https://exemplo.com/formulario-edocs',
            'Comply Fiscal': 'https://exemplo.com/formulario-fiscal'
        };

        // For now, just show alert - replace with actual redirect
        alert(`Redirecionando para o formulário de ${selectedProduct}...`);
        // window.location.href = formUrls[selectedProduct];
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-visual">
                        <img src="/images/support.jpg" alt="Suporte Sonda" className="contact-image" />
                        <div className="contact-overlay">
                            <h2>Solicite um Orçamento</h2>
                            <p>
                                Transforme a gestão fiscal da sua empresa com as soluções SONDA.
                                Nossos especialistas estão prontos para ajudar.
                            </p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Preencha seus dados</h3>

                            <div className="form-group">
                                <label htmlFor="product">Interesse em:</label>
                                <select
                                    id="product"
                                    name="product"
                                    value={selectedProduct}
                                    onChange={handleProductChange}
                                >
                                    <option value="Comply e-DOCS">Comply e-DOCS</option>
                                    <option value="Comply Fiscal">Comply Fiscal</option>
                                </select>
                            </div>

                            <button type="submit" className="btn-submit glow-hover">Solicitar Orçamento</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
