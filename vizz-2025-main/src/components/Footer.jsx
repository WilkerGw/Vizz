import React from "react";
import styles from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <p className={styles.footerText}>Av Do Oratório, 4869</p>
            <p className={styles.footerText}>
              Vila Industrial, São Paulo - SP, 03221-200
            </p>
            <p className={styles.footerText}>Telefone: (11) 2362-8799</p>
            <p className={styles.footerText}>Email: oticasvizz@gmail.com</p>
          </div>
          <div className={styles.footerSection}>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#agendamento" className={styles.footerLink}>
                  Agendamento
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
          <p>&copy; 2025 Ótica Vizz. Todos os direitos reservados..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exportação padrão
