import loginRoute from "./loginRoute";
import optionRoute from "./optionRoute";
const express = require('express');

const app = express();
//todas la rutas definidas
app.use('/login', loginRoute); 
app.use('/option', optionRoute); 

module.exports = app;