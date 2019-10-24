"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const query_1 = require("../query/query");
const optionDao_1 = __importDefault(require("../dao/optionDao"));
class OptionController {
    listAllOption(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listAllOption');
            yield database_1.default.query(query_1.Query.LIST_ALL_OPTION)
                .then((response) => {
                const rs = response.rows;
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'LISTA VACIA',
                        data: rs
                    });
                }
                else {
                    var list = rs.map((item) => {
                        return {
                            idOpt: item.id_opt,
                            nameOpt: item.name_opt,
                            descOpt: item.desc_opt,
                            codOpt: item.cod_opt
                        };
                    });
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'lista ',
                        data: list
                    });
                }
            })
                .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor',
                    data: null
                });
            })
                .finally(() => {
                console.log('cerrar poool');
                //pool.end()
            });
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
