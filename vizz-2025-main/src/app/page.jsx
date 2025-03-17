'use client';
import React from 'react';
import Header from '../components/Header'; // Certifique-se de que Header é exportado como default
import Hero from '../components/Hero'; // Certifique-se de que Hero é exportado como default
import Features from '../components/Features'; // Certifique-se de que Features é exportado como default
import Testimonials from '../components/Testimonials'; // Certifique-se de que Testimonials é exportado como default
import Footer from '../components/Footer'; // Certifique-se de que Footer é exportado como default
import '../styles/global.css'; // Importa estilos globais
import '../styles/animations.css'; // Importa animações globais
import Gallery from '@components/Gallery';
import Contact from '@components/Contact';
import Appointment from '@components/Appointment';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Gallery/>
      <Contact/>
      <Appointment/>
      <Testimonials />
      <Footer />
    </>
  );
}