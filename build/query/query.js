"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
}
Query.SELECT_CONFIG_PARAM = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
Query.SELECT_DATE = "SELECT NOW()";
Query.LOGIN_USER_PASSWORD = 'select * from main_schema.system_user where ident_user = $1 and pass_user = $2';
//option
Query.LIST_ALL_OPTION = 'SELECT * FROM main_schema.system_option;';
Query.INSERT_OPTION = 'INSERT INTO main_schema.system_option(name_opt, desc_opt, cod_opt) VALUES ( $1, $2, $3);';
Query.UPDATE_OPTION = 'UPDATE main_schema.system_option SET  name_opt=$1, desc_opt=$2, cod_opt=$3 WHERE id_opt=$4;';
Query.DELETE_OPTION = 'DELETE FROM main_schema.system_option WHERE id_opt=$1;';
//option_value
Query.LIST_ALL_OPTION_VALUE = 'SELECT * FROM main_schema.system_option_value WHERE id_opt=?;';
Query.INSERT_OPTION_VALUE = 'INSERT INTO main_schema.system_option_value(id_opt, name_opt_val, desc_opt_val, state_opt_val, cod_opt_val) VALUES ( ?, ?, ?, ?, ?);';
Query.UPDATE_OPTION_VALUE = 'UPDATE main_schema.system_option_value SET  name_opt_val=?, desc_opt_val=?, state_opt_val=?, cod_opt_val=? WHERE id_opt_val=?;';
Query.DELETE_OPTION_VALUE = 'DELETE FROM main_schema.system_option_value WHERE id_opt_val=?;';
exports.Query = Query;
