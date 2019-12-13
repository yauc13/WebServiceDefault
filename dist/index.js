"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        // necesario para recuperar body del Request      
        this.app.use(express.json()); //parse application/json
        this.app.use(express.urlencoded({ extended: false })); //parse application/x-www-form-urlencoded
    }
    routes() {
        this.app.use(require('./generalRoutes'));
    }
    star() {
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchando en puerto: ' + this.app.get('port'));
    }
}
const ser = new Server();
ser.star();
//# sourceMappingURL=index.js.map