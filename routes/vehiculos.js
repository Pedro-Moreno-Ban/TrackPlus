// routes/vehiculos.js
const express = require('express');
const router = express.Router();
const { getVehiculos } = require('../controllers/vehiculos');

// Asegúrate de que getVehiculos sea una función
router.get('/', getVehiculos);

// Exporta SOLO el router (no un objeto)
module.exports = router;
