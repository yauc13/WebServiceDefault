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
class OptionDao {
    listAllOption() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listAllOption dao');
            try {
                const rsw = yield database_1.default.query(query_1.Query.LIST_ALL_OPTION);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    return {
                        idOpt: item.id_opt,
                        nameOpt: item.name_opt,
                        descOpt: item.desc_opt,
                        codOpt: item.cod_opt
                    };
                });
            }
            catch (err) {
                console.log(err);
            }
            console.log(list);
            return list;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var res = false;
            try {
                yield database_1.default.query(query_1.Query.DELETE_OPTION, [id]);
                res = true;
            }
            catch (err) {
                res = false;
                console.log(err);
            }
            return res;
        });
    }
}
const optionDao = new OptionDao;
exports.default = optionDao;
