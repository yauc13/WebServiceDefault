"use strict";
/**
 * crea pool de conexiones
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pg = require('pg');
const keyDb_1 = require("./keyDb");
const pool = pg.Pool(keyDb_1.default.keyDbPostgres);
exports.default = pool;
//# sourceMappingURL=database.js.map