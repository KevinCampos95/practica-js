const path = require ('path'); // Conseguir ruta
const express = require ('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// Importar rutas
const indiceRutas = require('./rutas/index.js');

// Configuraciones
app.set('port', process.env.PORT || 3000); //Conseguir puerto configurado o dejar el 3000

// Middleware: Paquetes que ayuden a interceptar todo desde la solicitud del cliente hacia la ruta de la pagina
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'practicajs'
},'single'));

app.use(express.urlencoded({extended: false})); //extended: false es para que envíe datos planos, letras y números - IMPORTANTE: cuando enviamos datos con formularios

// Usamos las rutas
app.use('/', indiceRutas);


// Un servidor siempre esta escuchando, en este caso puerto 3000 o el que este asignado
app.listen(app.get('port'), () => {
	console.log("Escuchando en el puerto 3000");
});