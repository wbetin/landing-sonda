import React, { useEffect, useRef } from 'react';
import '../styles/Products.css';

const Products = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="products" className="products-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Nossas Soluções</h2>
                <div className="products-grid">
                    <div className="product-card">
                        <div className="card-icon edocs-icon">
                            <img src="https://aplicativos.sonda.com/assets/images/logo-comply-edocs.png" alt="Comply e-DOCS" />
                        </div>
                        <h3>Comply e-DOCS</h3>
                        <p>
                            O Comply e-Docs agrega funcionalidades de gerenciamento de documentos eletrônicos nos âmbitos municipal e estadual, processando ou arquivando documentos como NF-e, NFS-e e CT-e.
                        </p>
                        <p className="details">
                            Com alta performance e segurança, a solução é nativamente compatível com o ERP SAP e adaptável a qualquer outro sistema de origem, utilizando uma interface de troca de informações entre bancos de dados.
                        </p>
                        <a href="https://aplicativos.sonda.com/produtos/fiscais/complyedoc/conhecasolucao" target="_blank" rel="noopener noreferrer" className="btn-learn-more glow-hover">Saiba Mais</a>
                    </div>

                    <div className="product-card">
                        <div className="card-icon fiscal-icon">
                            <img src="https://aplicativos.sonda.com/assets/images/logo-comply.png" alt="Comply e-DOCS" />
                        </div>
                        <h3>Comply Fiscal</h3>
                        <p>
                            O Comply agrega valor diretamente à operação e gestão das áreas fiscais/tributárias das empresas, disponível nos modelos On-Premise e SaaS.
                        </p>
                        <p className="details">
                            Atende à geração de obrigações fiscais nas esferas federal, estadual e municipal, possibilitando uma completa gestão de todas as etapas e atividades necessárias para o sucesso do processo.
                        </p>
                        <a href="https://aplicativos.sonda.com/produtos/fiscais/comply/conhecasolucao" target="_blank" rel="noopener noreferrer" className="btn-learn-more glow-hover">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
