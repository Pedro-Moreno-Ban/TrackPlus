const express = require('express');
const router = express.Router();
const { getVehiculos } = require('../controllers/vehiculos');

router.get('/', getVehiculos);

module.exports = router;