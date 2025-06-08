const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importación CORRECTA de rutas
const vehiculosRouter = require('./routes/vehiculos');
const alertasRouter = require('./routes/alertas');

// Verifica que sean funciones middleware válidas
console.log(typeof vehiculosRouter); // Debe mostrar "function"

// Usa las rutas
app.use('/api/vehiculos', vehiculosRouter);
app.use('/api/alertas', alertasRouter);

// Ruta de prueba
app.get('/', (req, res) => res.send('API Funcionando'));

module.exports = app;
