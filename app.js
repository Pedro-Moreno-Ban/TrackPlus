/*const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/vehiculos', require('./routes/vehiculos'));
app.use('/api/alertas', require('./routes/alertas'));

module.exports = app;//*/
const express = require('express');
const app = express();

app.use(express.json());

// Rutas básicas de prueba
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

module.exports = app;

// Middleware de errores (al final de todo)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    detalles: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});