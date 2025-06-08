const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares esenciales
app.use(cors());
app.use(express.json());

// Rutas
const vehiculosRouter = require('./routes/vehiculos'); 
const alertasRouter = require('./routes/alertas');

app.use('/api/vehiculos', vehiculosRouter);
app.use('/api/alertas', alertasRouter);

// Ruta de prueba opcional
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

// Middleware de errores (¡ANTES de module.exports!)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    detalles: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

module.exports = app;
});
