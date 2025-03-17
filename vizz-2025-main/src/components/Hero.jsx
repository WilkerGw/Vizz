import React from 'react';
import styles from '../styles/components/hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} fade-in`}>
      <div className='container__logo-header'>
        <img src="/images/logo.png" alt="" className={styles.logo__hero} />
      </div>
      <div className="container__infos-header">
        <h2>O MELHOR <span className={styles.span}>PREÇO</span> E <span className={styles.span}>QUALIDADE</span> DA REGIÃO</h2>
        <p>Agende sua consulta, faça um orçamento e <span className={styles.span}>NÃO JOGUE DINHEIRO FORA</span>.</p>
        <a href="#agendamento"><button className={styles.ctaButton}>Agende sua Consulta</button></a>
      </div>
    </section>
  );
};

export default Hero; // Exportação padrão