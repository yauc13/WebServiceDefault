"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const query_1 = require("./query/query");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.connectionDb();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
    }
    star() {
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchabdo en puerto: ' + this.app.get('port'));
    }
    connectionDb() {
        console.log('entra a conection base de datos');
        database_1.default.query(query_1.Query.SELECT_CONFIG_PARAM, [1])
            .then((response) => {
            console.log(response.rows);
            const list = response.rows;
            var arreglado = list.map((item) => {
                return { idConfigurationParam: item.id_configuration_param, idEnterprise: item.id_enterprise };
            });
            console.log(arreglado);
        })
            .catch((err) => {
            console.log(err);
        })
            .finally(() => {
            database_1.default.end();
        });
    }
}
const ser = new Server();
ser.star();
