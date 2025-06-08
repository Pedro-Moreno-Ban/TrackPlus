const express = require('express');
const app = express();

// Importa las rutas CORRECTAMENTE
const vehiculosRouter = require('./routes/vehiculos');
const alertasRouter = require('./routes/alertas');

// Middlewares primero
app.use(express.json());

// Luego las rutas
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
