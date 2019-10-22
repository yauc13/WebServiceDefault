"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
}
Query.SELECT_CONFIG_PARAM = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
Query.SELECT_DATE = "SELECT NOW()";
exports.Query = Query;
