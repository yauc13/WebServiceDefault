"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
}
exports.Query = Query;
Query.SELECT_CONFIG_PARAM = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
Query.SELECT_DATE = "SELECT NOW()";
//login
Query.LOGIN_USER_PASSWORD = 'select * from main_schema.system_user where ident_user = $1 and pass_user = $2';
Query.enterpisesByUser = 'select si.* from main_schema.user_institution ui inner join main_schema.system_institution si ON si.id_inst = ui.id_inst where ui.id_user = $1 and si.state_inst = true';
//option
Query.LIST_ALL_OPTION = 'SELECT * FROM main_schema.system_option;';
Query.INSERT_OPTION = 'INSERT INTO main_schema.system_option(name_opt, desc_opt, cod_opt) VALUES ( $1, $2, $3);';
Query.UPDATE_OPTION = 'UPDATE main_schema.system_option SET  name_opt=$1, desc_opt=$2, cod_opt=$3 WHERE id_opt=$4;';
Query.DELETE_OPTION = 'DELETE FROM main_schema.system_option WHERE id_opt=$1;';
//option_value
Query.LIST_ALL_OPTION_VALUE = 'SELECT * FROM main_schema.system_option_value WHERE id_opt=$1;';
Query.INSERT_OPTION_VALUE = 'INSERT INTO main_schema.system_option_value(id_opt, name_opt_val, desc_opt_val, state_opt_val, cod_opt_val) VALUES ( $1, $2, $3, $4, $5);';
Query.UPDATE_OPTION_VALUE = 'UPDATE main_schema.system_option_value SET  name_opt_val=$1, desc_opt_val=$2, state_opt_val=$3, cod_opt_val=$4 WHERE id_opt_val=$5;';
Query.DELETE_OPTION_VALUE = 'DELETE FROM main_schema.system_option_value WHERE id_opt_val=$1;';
//# sourceMappingURL=query.js.map