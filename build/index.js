"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        // necesario para recuperar body del Request      
        this.app.use(express_1.default.json()); //parse application/json
        this.app.use(express_1.default.urlencoded({ extended: false })); //parse application/x-www-form-urlencoded
    }
    routes() {
        this.app.use(require('./routes/generalRoutes'));
    }
    star() {
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchando en puerto: ' + this.app.get('port'));
    }
}
const ser = new Server();
ser.star();
