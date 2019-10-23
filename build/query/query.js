"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
}
Query.SELECT_CONFIG_PARAM = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
Query.SELECT_DATE = "SELECT NOW()";
Query.LOGIN_USER_PASSWORD = 'select * from main_schema.system_user where ident_user = $1 and pass_user = $2';
exports.Query = Query;
