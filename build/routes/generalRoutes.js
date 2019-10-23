"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginRoute_1 = __importDefault(require("./loginRoute"));
const express = require('express');
const app = express();
//todas la rutas definidas
app.use('/login/loginAuth', loginRoute_1.default);
module.exports = app;
