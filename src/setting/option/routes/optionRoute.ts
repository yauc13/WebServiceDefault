import { Router } from "express";
import optionController from "../controller/optionController";

class OptionRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() { 
        this.router.get('', optionController.listAllOptionStatic);       
        this.router.get('/listOption', optionController.listAllOptionStatic);
        this.router.post('/option', optionController.insert);
        this.router.put('/option', optionController.update);
        this.router.delete('/option/:id', optionController.delete);
    }

}

export default new OptionRoutes().router;