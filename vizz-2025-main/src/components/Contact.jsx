
'use client';
import React, { useState } from 'react';
import styles from '../styles/components/contact.module.css';
import ServicesFilter from './Services-filter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contato" className={styles.contact}>
      <div className="container">
        <h2 className={styles.contactTitle}>Entre em <span className={styles.span}>Contato</span></h2>
        <p className={styles.contactSubtitle}>Fique à vontade para entrar em contato conosco.</p>
        <div className={styles.contactContent}>
          <div className={styles.formContainer}>
            <ServicesFilter/>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
            </form>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.776806597955!2d-46.65361908479916!3d-23.56497486819383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x440cf223e8d88d80!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689180000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;