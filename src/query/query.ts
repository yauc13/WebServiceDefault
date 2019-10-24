export class Query { 
   
    
    static SELECT_CONFIG_PARAM: string = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
    static SELECT_DATE: string = "SELECT NOW()"; 

    static LOGIN_USER_PASSWORD: string = 'select * from main_schema.system_user where ident_user = $1 and pass_user = $2';


    //option
    static LIST_ALL_OPTION: string = 'SELECT * FROM main_schema.system_option;';
    static INSERT_OPTION: string = 'INSERT INTO main_schema.system_option(name_opt, desc_opt, cod_opt) VALUES ( $1, $2, $3);';
    static UPDATE_OPTION: string = 'UPDATE main_schema.system_option SET  name_opt=$1, desc_opt=$2, cod_opt=$3 WHERE id_opt=$4;';
    static DELETE_OPTION: string = 'DELETE FROM main_schema.system_option WHERE id_opt=$1;';

    //option_value
    static LIST_ALL_OPTION_VALUE: string = 'SELECT * FROM main_schema.system_option_value WHERE id_opt=?;';
    static INSERT_OPTION_VALUE: string = 'INSERT INTO main_schema.system_option_value(id_opt, name_opt_val, desc_opt_val, state_opt_val, cod_opt_val) VALUES ( ?, ?, ?, ?, ?);';
    static UPDATE_OPTION_VALUE: string = 'UPDATE main_schema.system_option_value SET  name_opt_val=?, desc_opt_val=?, state_opt_val=?, cod_opt_val=? WHERE id_opt_val=?;';
    static DELETE_OPTION_VALUE: string = 'DELETE FROM main_schema.system_option_value WHERE id_opt_val=?;';





} 