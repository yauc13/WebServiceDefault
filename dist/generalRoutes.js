"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import loginRoute from "./setting/login/route/loginRoute";
const optionRoute_1 = require("./setting/option/routes/optionRoute");
const express = require('express');
const app = express();
//todas la rutas definidas
//app.use(process.env.API_URL+'/login', loginRoute);
/*app.get("", (req: any, res: { json: (arg0: { 'ok': boolean; 'data': string; }) => { (): any; new(): any; end: { (): void; new(): any; }; }; }) => {
    res.json({'ok': true, 'data':'pagina index'}).end();
})*/
app.use('', optionRoute_1.default);
app.use(process.env.API_URL + '/option', optionRoute_1.default);
module.exports = app;
//# sourceMappingURL=generalRoutes.js.map