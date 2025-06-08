const pool = require('../config/db');

const getAllVehiculos = async () => {
  const result = await pool.query('SELECT * FROM vehiculos');
  return result.rows;
};

const createVehiculo = async (placa, modelo, kilometraje) => {
  const result = await pool.query(
    'INSERT INTO vehiculos (placa, modelo, kilometraje_actual) VALUES ($1, $2, $3) RETURNING *',
    [placa, modelo, kilometraje]
  );
  return result.rows[0];
};

module.exports = { getAllVehiculos, createVehiculo };