const Vehiculo = require('../models/Vehiculo');

// Usa exports directos o module.exports, no ambos
const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.getAllVehiculos();
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addVehiculo = async (req, res) => {
  const { placa, modelo, kilometraje } = req.body;
  try {
    const nuevoVehiculo = await Vehiculo.createVehiculo(placa, modelo, kilometraje);
    res.status(201).json(nuevoVehiculo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear vehículo' });
  }
};

// Exporta como objeto
module.exports = {
  getVehiculos,
  addVehiculo
};
