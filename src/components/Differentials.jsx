import React from 'react';
import '../styles/Differentials.css';

const Differentials = () => {
    const allDifferentials = [
        { title: "Alta Capacidade", desc: "Processamento robusto de NF-e, NFS-e e CT-e.", icon: "🚀" },
        { title: "Alta Performance", desc: "Tecnologia de ponta para velocidade e segurança.", icon: "⚡" },
        { title: "Agilidade Legal", desc: "Atendimento rápido às mudanças da SEFAZ e Prefeituras.", icon: "📋" },
        { title: "Customização", desc: "E-mails de distribuição totalmente personalizáveis.", icon: "🎨" },
        { title: "Integração ERP", desc: "Nativa com diversos ERPs de mercado.", icon: "🔗" },
        { title: "Comunicação Financeira", desc: "Automática com Contas a Pagar/Receber.", icon: "💰" },
        { title: "Calendário Fiscal", desc: "Gestão completa de prazos e obrigações.", icon: "📅" },
        { title: "SaaS na Nuvem", desc: "Seguro, sempre atualizado e com menor custo (TCO).", icon: "☁️" }
    ];

    return (
        <section id="differentials" className="differentials-section">
            <div className="container">
                <h2 className="section-title">Por que escolher a SONDA?</h2>

                <div className="differentials-content">
                    <div className="cards-grid">
                        {allDifferentials.map((item, index) => (
                            <div key={index} className="diff-card glow-hover">
                                <div className="card-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentials;
