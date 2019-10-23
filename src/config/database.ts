/**
 * crea pool de conexiones 
 */

const pg = require('pg')
import keys from './keyDb';
const pool = pg.Pool(keys.keyDbPostgres);

export default pool;