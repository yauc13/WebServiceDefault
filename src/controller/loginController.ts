import { Request, Response } from 'express';
import pool from '../config/database';
import { Query } from '../query/query';

const bcrypt = require('bcryptjs'); 

class LoginController {

 


public async login(req: Request, res: Response): Promise<any> {
    console.log('entra a login server');
    const body = req.body; 
    const passEncode = body.pass;
    console.log(body);
   await pool.query(Query.LOGIN_USER_PASSWORD,[body.identUser,passEncode])
    .then((response: { rows: any; }) => {
        console.log('response: ',response);
        const rs= response.rows;
        if(rs <=0){
            return res.status(400).json({
                status: 'FAIL',
                message: 'usuario o contraseña no encontrado',
                data: null,
                token: null,
            });
        }else{
            
             const user= { 
                idUser: rs[0].id_user ,
                idSpeciality : rs[0].id_speciality,
                nameUser : rs[0].name_user,
                lastNameUser : rs[0].last_name_user,
                identUser : rs[0].ident_user

            }; 
                return res.status(200).json({
                    status: 'SUCCESS',
                    message: 'login exitoso',
                    data: user,
                    token: '123',
                });
              console.log(user); 
        }
         

    })
    .catch((err: any) => {
        console.log(err)
        return res.status(500).json({
            status: 'FAIL',
            message: 'error respuesta servidor',
            data: null,
            token: null,
        });
        
    })
    .finally(() => {      
        pool.end()
     }) 
   
}


connectionDb(){
    console.log('entra a conection base de datos');
    pool.query(Query.SELECT_CONFIG_PARAM,[1])
    .then((response: { rows: any; }) => {
        console.log(response.rows);
        const list = response.rows;
        var arreglado = list.map( (item: any) => { 
            return { idConfigurationParam: item.id_configuration_param , idEnterprise : item.id_enterprise }; 
          });
          console.log(arreglado);  

    })
    .catch((err: any) => {
        console.log(err)
    })
    .finally(() => {      
        pool.end()
     })                       
}





}
const loginController = new LoginController;
export default loginController;