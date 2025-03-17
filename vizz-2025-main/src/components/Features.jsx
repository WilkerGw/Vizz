'use client'

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/components/features.module.css";
import ServicesFilter from "../components/Services-filter";

const Features = () => {
  return (
    <section id="servicos" className={styles.features}>
      <h1>Nossos serviços</h1>
      <div className={styles.services}>
        {[{
          title: "Exame de Vista",
          highlight: "Gratuito",
          description: "Agende seu exame de vista gratuito com profissionais qualificados. Cuidamos da sua saúde ocular com precisão e sem custo."
        }, {
          title: "Fabricação de",
          highlight: "Óculos de Grau Personalizados",
          description: "Criamos óculos sob medida para você! Escolha a armação perfeita e conte com lentes adaptadas às suas necessidades."
        }, {
          title: "Consultoria com",
          highlight: "Especialistas",
          description: "Nossa equipe está pronta para te ajudar a escolher o melhor óculos para o seu estilo e conforto, garantindo qualidade e bem-estar."
        }].map((service, index) => (
          <motion.div
            key={index}
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ServicesFilter />
            <h1>{service.title} <span className={styles.span}>{service.highlight}</span></h1>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features; // Exportação padrão
