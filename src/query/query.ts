export class Query { 
   
    
    static SELECT_CONFIG_PARAM: string = 'SELECT * FROM config.ecnt_configuration_params where id_enterprise = $1';
    static SELECT_DATE: string = "SELECT NOW()"; 

    static LOGIN_USER_PASSWORD: string = 'select * from main_schema.system_user where ident_user = $1 and pass_user = $2';
    
   
} 