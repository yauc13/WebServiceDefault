import loginRoute from "./loginRoute";

const express = require('express');

const app = express();
//todas la rutas definidas
app.use('/login/loginAuth', loginRoute); 


module.exports = app;