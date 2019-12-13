/**
 * seccion para variables de entorno
 */
/**
 * vencimineto del token 60 seg,60min, 24h, 30dias
 */
process.env.CADUCIDAD_TOKEN = (60 * 60 * 24 * 30) + '';
/**
 * semilla SEED de autenticacion
 */
process.env.SEED = process.env.SEED || 'seed-server';
process.env.API_URL = '';
//# sourceMappingURL=configConstants.js.map