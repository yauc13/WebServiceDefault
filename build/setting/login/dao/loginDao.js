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
const database_1 = __importDefault(require("../../database"));
const query_1 = require("../../../query/query");
class LoginDao {
    getUserByIdentPass(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listEnterpriseByIdUser logindao');
            try {
                const rsw = yield database_1.default.query(query_1.Query.enterpisesByUser, [idUser]);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });
            }
            catch (err) {
                console.log(err);
                throw err;
            }
            console.log(list);
            return list;
        });
    }
    listEnterpriseByIdUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listEnterpriseByIdUser logindao');
            try {
                const rsw = yield database_1.default.query(query_1.Query.enterpisesByUser, [idUser]);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });
            }
            catch (err) {
                console.log(err);
                throw err;
            }
            console.log(list);
            return list;
        });
    }
    listEnterpriseByIdUser2(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listEnterpriseByIdUser logindao');
            try {
                const rsw = yield database_1.default.query(query_1.Query.enterpisesByUser, [idUser]);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });
            }
            catch (err) {
                console.log(err);
                throw err;
            }
            console.log(list);
            return list;
        });
    }
    validateSectionByUser(data, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a validateSectionByUser logindao');
            try {
                const rsw = yield database_1.default.query(query_1.Query.enterpisesByUser, [idUser]);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });
            }
            catch (err) {
                console.log(err);
                throw err;
            }
            console.log(list);
            return list;
        });
    }
}
const loginDao = new LoginDao;
exports.default = loginDao;
