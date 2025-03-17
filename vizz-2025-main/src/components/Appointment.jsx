import React, { useState } from 'react';
import styles from '../styles/components/appointment.module.css';

const availableDate = new Date(2025, 3, 3); // 03/04/2025 (mês começa em 0)

const generateAvailableTimes = () => {
  const times = [];
  let startTime = new Date(availableDate);
  startTime.setHours(10, 30, 0);

  while (startTime.getHours() < 17 || (startTime.getHours() === 17 && startTime.getMinutes() <= 15)) {
    times.push(new Date(startTime));
    startTime.setMinutes(startTime.getMinutes() + 15);
  }

  return times.map(time => time.toTimeString().substring(0, 5)); // Formato HH:MM
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setFormData({
      ...formData,
      date: date,
      time: '' // Limpar o horário quando a data muda
    });
  };

  const handleTimeChange = (e) => {
    setFormData({
      ...formData,
      time: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar a data
    if (formData.date !== availableDate.toISOString().split('T')[0]) {
      alert('Data inválida. Por favor, selecione a data correta.');
      return;
    }

    // Validar o horário
    if (!formData.time) {
      alert('Por favor, selecione um horário.');
      return;
    }

    try {
      // Enviar os dados para o backend via POST
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      // Exibir mensagem de sucesso ou erro
      if (response.ok) {
        alert(result.message || 'Agendamento realizado com sucesso!');
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: ''
        });
      } else {
        alert(result.message || 'Erro ao realizar o agendamento.');
      }
    } catch (error) {
      console.error('Erro ao enviar o agendamento:', error);
      alert('Erro ao conectar ao servidor. Por favor, tente novamente mais tarde.');
    }
  };

  const availableTimes = generateAvailableTimes();

  return (
    <section id="agendamento" className={styles.appointment}>
      <div className="container">
        <h2 className={styles.appointmentTitle}>Agende seu Exame <span className={styles.span__appointment}>Gratuito</span>!</h2>
        <p className={styles.appointmentSubtitle}>Faça um agendamento rápido e fácil conosco.</p>
        <form onSubmit={handleSubmit} className={styles.appointmentForm}>
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
            <label htmlFor="phone" className={styles.formLabel}>Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.formLabel}>Data</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className={styles.formInput}
              min={availableDate.toISOString().split('T')[0]}
              max={availableDate.toISOString().split('T')[0]}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time" className={styles.formLabel}>Hora</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleTimeChange}
              className={styles.formInput}
              required
            >
              <option value="">Selecione um horário</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>Agendar Exame</button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;