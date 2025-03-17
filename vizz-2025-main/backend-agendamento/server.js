require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Appointment = require('./models/Appointment');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rota para enviar email (simulação)
app.post('/send-email', async (req, res) => {
  try {
    const { name, phone, date, time } = req.body;

    // Salvar no banco de dados
    const newAppointment = new Appointment({ name, phone, date, time });
    await newAppointment.save();

    res.status(200).json({ message: 'Agendamento salvo com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar o agendamento' });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});