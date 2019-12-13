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
const SystemOption_1 = require("../../../model/SystemOption");
class OptionDao {
    listAllOption() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rsw = yield database_1.default.query(query_1.Query.LIST_ALL_OPTION);
                const rs = rsw.rows;
                var list = [];
                list = rs.map((item) => {
                    const obj = new SystemOption_1.SystemOption();
                    obj.idOpt = item.id_opt;
                    obj.nameOpt = item.name_opt;
                    obj.descOpt = item.desc_opt;
                    obj.codOpt = item.cod_opt;
                    return obj;
                });
            }
            catch (err) {
                console.log(err);
                throw err;
            }
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
//# sourceMappingURL=optionDao.js.map