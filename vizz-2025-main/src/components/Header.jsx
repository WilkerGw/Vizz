'use client';

import Link from 'next/link';
import styles from '../styles/components/header.module.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src="/images/logo.png" alt="" className={styles.logo} />
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="#home" className={styles.link}>Home</Link>
          <Link href="#servicos" className={styles.link}>Servicos</Link>
          <Link href="#destaques" className={styles.link}>Destaques</Link>
          <Link href="#contato" className={styles.link}>Contato</Link>
          <Link href="#agendamento" className={styles.link}>Agendamento</Link>
          <Link href="#comprar" className={styles.link}>Comprar</Link>
          <Link href="#depoimentos" className={styles.link}>Depoimentos</Link>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        </button>
      </nav>
      {isOpen && (
        <div className={styles.mobileNav}>
          <Link href="#home" className={styles.mobileLink}>Home</Link>
          <Link href="#servicos" className={styles.mobileLink}>Servicos</Link>
          <Link href="#destaques" className={styles.mobileLink}>Destaques</Link>
          <Link href="#contato" className={styles.mobileLink}>Contato</Link>
          <Link href="#agendamento" className={styles.mobileLink}>Agendamento</Link>
          <Link href="#comprar" className={styles.mobileLink}>Comprar</Link>
          <Link href="#depoimentos" className={styles.mobileLink}>Depoimentos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;