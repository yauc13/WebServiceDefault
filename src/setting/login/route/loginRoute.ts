import { Router } from "express";
import loginController from "../controller/loginController";

class LoginRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/loginAuth', loginController.login);
        this.router.post('/verifyTokenAndSection', loginController.login);
        
    }

}

export default new LoginRoutes().router;
