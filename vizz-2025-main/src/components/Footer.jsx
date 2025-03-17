import React from "react";
import styles from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contato</h3>
            <p className={styles.footerText}>Av Do Oratório, 4869</p>
            <p className={styles.footerText}>
              Vila Industrial, São Paulo - SP, 03221-200
            </p>
            <p className={styles.footerText}>Telefone: (11) 2362-8799</p>
            <p className={styles.footerText}>Email: oticasvizz@gmail.com</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Links Úteis</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#sobre" className={styles.footerLink}>
                  Sobre
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#servicos" className={styles.footerLink}>
                  Serviços
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#contato" className={styles.footerLink}>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Redes Sociais</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/face.png" alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/insta.png" alt="Instagram" />
              </a>
              <a href="https://wa.me/551123628799" className={styles.socialIcon}>
                <img src="/images/whats.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2023 Ótica Visão Clara. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exportação padrão
