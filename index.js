const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {  dbConnection }  = require('./database/config');
const { propfind } = require('./routes/usuario.route');

//iniciar express
const app = express();

//iniciar cors
app.use(cors());

//lectura y parseo del body
app.use( express.json());

//Database connection
dbConnection();

//b7mjWQ9u8097vlWE
 
app.use('/api/usuarios', require('./routes/usuario.route'));
app.use('/api/login', require('./routes/auth.route'));

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en el puerto', process.env.PORT);  
});
