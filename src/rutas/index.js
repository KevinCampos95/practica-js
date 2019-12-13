const express = require('express');
const rutas = express.Router();

const usersController = require('../controllers/usersController');

// Rutas
rutas.get('/', usersController.list);
rutas.post('/login', usersController.getUsuario);
rutas.post('/user', usersController.insertUsuario);


module.exports = rutas;  