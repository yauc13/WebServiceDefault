"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const optionController_1 = require("../controller/optionController");
class OptionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('', optionController_1.default.listAllOptionStatic);
        this.router.get('/listOption', optionController_1.default.listAllOptionStatic);
        this.router.post('/option', optionController_1.default.insert);
        this.router.put('/option', optionController_1.default.update);
        this.router.delete('/option/:id', optionController_1.default.delete);
    }
}
exports.default = new OptionRoutes().router;
//# sourceMappingURL=optionRoute.js.map