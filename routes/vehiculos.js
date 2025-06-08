const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculos');

// Asegúrate de pasar la función directamente
router.get('/', vehiculoController.getVehiculos);

// Exporta SOLO el router (no un objeto)
module.exports = router;
