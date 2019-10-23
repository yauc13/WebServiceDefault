"use strict";
/**
 * crea pool de conexiones
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg = require('pg');
const keyDb_1 = __importDefault(require("./keyDb"));
const pool = pg.Pool(keyDb_1.default.keyDbPostgres);
exports.default = pool;
