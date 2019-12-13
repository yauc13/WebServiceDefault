"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controller/loginController");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/loginAuth', loginController_1.default.login);
        this.router.post('/verifyTokenAndSection', loginController_1.default.login);
    }
}
exports.default = new LoginRoutes().router;
//# sourceMappingURL=loginRoute.js.map