  
const pg = require('pg')

import keys from './keyDb';

const pool = pg.Pool(keys.keyDbPostgres);

export default pool;