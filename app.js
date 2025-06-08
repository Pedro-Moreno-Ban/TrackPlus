const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
const vehiculosRouter = require('./routes/vehiculos'); 
const alertasRouter = require('./routes/alertas');

// Usa las rutas
app.use('/api/vehiculos', vehiculosRouter); // ✔ Así es correcto
app.use('/api/alertas', alertasRouter);

module.exports = app;/*
const express = require('express');
const app = express();

app.use(express.json());

// Rutas básicas de prueba
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

module.exports = app;*/

// Middleware de errores (al final de todo)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    detalles: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});
