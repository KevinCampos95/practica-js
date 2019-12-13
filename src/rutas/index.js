const express = require('express');
const rutas = express.Router();

const usersController = require('../controllers/usersController');

// Rutas
rutas.post('/login', usersController.getUsuario);
rutas.post('/user', usersController.insertUsuario);


module.exports = rutas;  