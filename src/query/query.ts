export class Query { 
    static SELECT_CONFIG_PARAM: string = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
    static SELECT_DATE: string = "SELECT NOW()"; 
} 