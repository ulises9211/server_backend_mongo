const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {  dbConnection }  = require('./database/config')
//iniciar express
const app = express();

//iniciar cors
app.use(cors());

//Database connection
dbConnection();

//b7mjWQ9u8097vlWE
//mean_user

app.get('/', ( req, res ) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en el puerto', process.env.PORT);  
});
