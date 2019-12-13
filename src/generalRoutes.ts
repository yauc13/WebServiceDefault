//import loginRoute from "./setting/login/route/loginRoute";
import optionRoute from "./setting/option/routes/optionRoute";
const express = require('express');

const app = express();
//todas la rutas definidas
//app.use(process.env.API_URL+'/login', loginRoute);

app.use(process.env.API_URL+'/option', optionRoute);

module.exports = app;
