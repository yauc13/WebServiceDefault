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
class OptionValueDao {
    listOptionValue(idOpt) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a listAllOption dao');
            try {
                const rsw = yield database_1.default.query(query_1.Query.LIST_ALL_OPTION_VALUE, [idOpt]);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    return {
                        idOptVal: item.id_opt,
                        idOpt: item.id_opt,
                        nameOptVal: item.name_opt,
                        descOptVal: item.desc_opt,
                        codOptVal: item.cod_opt,
                        stateOptVal: item.state_opt_val
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
    insert(oV) {
        return __awaiter(this, void 0, void 0, function* () {
            var res = false;
            try {
                yield database_1.default.query(query_1.Query.INSERT_OPTION_VALUE, [oV.idOpt, oV.nameOptVal, oV.descOptVal, oV.stateOptVal, oV.codOptVal]);
                res = true;
            }
            catch (err) {
                res = false;
                console.log(err);
            }
            return res;
        });
    }
    update(oV) {
        return __awaiter(this, void 0, void 0, function* () {
            var res = false;
            try {
                yield database_1.default.query(query_1.Query.UPDATE_OPTION_VALUE, [oV.nameOptVal, oV.descOptVal, oV.stateOptVal, oV.codOptVal, oV.idOptVal]);
                res = true;
            }
            catch (err) {
                res = false;
                console.log(err);
            }
            return res;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var res = false;
            try {
                yield database_1.default.query(query_1.Query.DELETE_OPTION_VALUE, [id]);
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
const optionValueDao = new OptionValueDao;
exports.default = optionValueDao;
