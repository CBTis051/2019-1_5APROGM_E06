require('./config/config');

const express = require('express');

const app = express();

const mysql = require('mysql2');

const jwt = require('jsonwebtoken');


const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// Parse application/json
app.use(bodyParser.json())

// Configuración global de rutas
app.use(require('./routes/index'));

/**
 * Home del server --> / 
 */
app.get('/', (req, res) =>{

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGM Equipo 06"
    };

    res.send(objeto);

});

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT)
});