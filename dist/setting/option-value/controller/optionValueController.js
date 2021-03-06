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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const query_1 = require("../../../query/query");
const optionValueDao_1 = require("../dao/optionValueDao");
class OptionValueController {
    listAllOption(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listAllOption');
            try {
                const { id } = req.params;
                const list = yield optionValueDao_1.default.listOptionValue(+id);
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
            try {
                const opt = req.body;
                const rs = yield optionValueDao_1.default.insert(opt);
                if (rs) {
                    res.status(200).json({
                        status: 'SUCCESS',
                        message: 'insertado correctamente ',
                        data: true
                    });
                }
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: 'FAIL',
                    message: err.toString(),
                    data: false
                });
            }
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
                const r = yield optionValueDao_1.default.delete(+id);
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
const optionValueController = new OptionValueController;
exports.default = optionValueController;
//# sourceMappingURL=optionValueController.js.map