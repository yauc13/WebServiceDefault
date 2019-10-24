"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginRoute_1 = __importDefault(require("./loginRoute"));
const optionRoute_1 = __importDefault(require("./optionRoute"));
const express = require('express');
const app = express();
//todas la rutas definidas
app.use('/login', loginRoute_1.default);
app.use('/option', optionRoute_1.default);
module.exports = app;
