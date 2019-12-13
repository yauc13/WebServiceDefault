//import loginRoute from "./setting/login/route/loginRoute";
import optionRoute from "./setting/option/routes/optionRoute";
const express = require('express');

const app = express();
//todas la rutas definidas
//app.use(process.env.API_URL+'/login', loginRoute);
/*app.get("", (req: any, res: { json: (arg0: { 'ok': boolean; 'data': string; }) => { (): any; new(): any; end: { (): void; new(): any; }; }; }) => {
    res.json({'ok': true, 'data':'pagina index'}).end();
})*/
app.use('',optionRoute);
app.use(process.env.API_URL+'/option', optionRoute);

module.exports = app;
