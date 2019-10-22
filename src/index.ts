
import express, {Application, application} from 'express';
import pool from './config/database';
import { Query } from './query/query'

class Server{
 
    public app: Application;

    constructor(){
    this.app=express();
    this.config();
    this.routes();
    this.connectionDb();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
    }

    routes():void{

    }
    star():void{
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchabdo en puerto: '+this.app.get('port'));
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

const ser=new Server();
ser.star();