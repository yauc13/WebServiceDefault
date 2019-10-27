"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginRoute_1 = __importDefault(require("./setting/login/route/loginRoute"));
const optionRoute_1 = __importDefault(require("./setting/option/routes/optionRoute"));
const express = require('express');
const app = express();
//todas la rutas definidas
app.use(process.env.API_URL + '/login', loginRoute_1.default);
app.use(process.env.API_URL + '/option', optionRoute_1.default);
module.exports = app;
