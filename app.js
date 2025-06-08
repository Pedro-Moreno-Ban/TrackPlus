const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares básicos PRIMERO
app.use(cors());
app.use(express.json());

// Importación CORRECTA de rutas
const vehiculosRouter = require('./routes/vehiculos');
const alertasRouter = require('./routes/alertas');

// Verifica que sean funciones
console.log(typeof vehiculosRouter); // Debe mostrar "function"

// Usa las rutas
app.use('/api/vehiculos', vehiculosRouter);
app.use('/api/alertas', alertasRouter);

// Ruta de prueba
app.get('/', (req, res) => res.send('API Funcionando'));

// Middleware de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno' });
});

module.exports = app;
