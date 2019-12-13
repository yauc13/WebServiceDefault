"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const query_1 = require("../../../query/query");
const optionDao_1 = __importDefault(require("../dao/optionDao"));
class OptionController {
    listAllOption(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listAllOption');
            try {
                const list = yield optionDao_1.default.listAllOption();
                res.status(200).json({
                    status: 'success',
                    message: 'lista ',
                    data: list
                });
            }
            catch (error) {
                console.log('exception controller');
                console.log(error.toString());
                res.status(500).json({
                    status: 'FAIL',
                    message: error.toString(),
                    data: null
                });
            }
        });
    }
    listAllOptionStatic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = [
                    {
                        "idOpt": 1,
                        "nameOpt": "Genero",
                        "descOpt": "sexo biologico",
                        "codOpt": "cod-sexo"
                    },
                    {
                        "idOpt": 6,
                        "nameOpt": "Zona",
                        "descOpt": "desc zona",
                        "codOpt": "ZONE"
                    }
                ];
                res.status(200).json({
                    status: 'success',
                    message: 'lista ',
                    data: list
                });
            }
            catch (error) {
                console.log('exception controller');
                console.log(error.toString());
                res.status(500).json({
                    status: 'FAIL',
                    message: error.toString(),
                    data: null
                });
            }
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a insert', req.body);
            const opt = req.body;
            yield database_1.default.query(query_1.Query.INSERT_OPTION, [opt.nameOpt, opt.descOpt, opt.codOpt])
                .then((response) => {
                const rs = response;
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'insertado vacio',
                        data: true
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'insertado correctamente ',
                        data: true
                    });
                }
            })
                .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor no insertado',
                    data: false
                });
            })
                .finally(() => {
                console.log('cerrar poool');
                //pool.end()
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a update', req.body);
            const opt = req.body;
            yield database_1.default.query(query_1.Query.UPDATE_OPTION, [opt.nameOpt, opt.descOpt, opt.codOpt, opt.idOpt])
                .then((response) => {
                const rs = response;
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'actualizado vacio',
                        data: true
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'actualizado correctamente ',
                        data: true
                    });
                }
            })
                .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor no actualizado',
                    data: false
                });
            })
                .finally(() => {
                console.log('cerrar poool');
                //pool.end()
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const r = yield optionDao_1.default.delete(+id);
                if (r) {
                    res.json({
                        status: 'SUCCESS',
                        message: 'eliminado correctamente',
                        data: true
                    });
                }
                else {
                    res.status(500).json({
                        status: 'FAIL',
                        message: 'error no eliminado',
                        data: false
                    });
                }
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor no eliminado',
                    data: false
                });
            }
        });
    }
}
const optionController = new OptionController;
exports.default = optionController;
//# sourceMappingURL=optionController.js.map