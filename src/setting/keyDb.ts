export default {

    database: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ng_games'
    },
   keyDbPostgres: {
        host: 'localhost',
        user: 'postgres',
        port: 5432,
        database: 'db_abaton',
        password: 'password',
        //password: 'postgres',
        max: 2,
        min: 1,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
      },
      connectionData : {
        user: 'postgres',
        host: 'localhost',
        database: 'db_historia_clinica',
        password: 'postgres',
        port: 5432,
      }

}