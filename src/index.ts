
import express, {Application, application} from 'express';
import pool from './config/database';
import { Query } from './query/query'

class Server{
 
    public app: Application;

    constructor(){
    this.app=express();
    this.config();
    this.routes();
    
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);       
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false})); //necesario para recuperar body del Request
    }

    routes():void{        
        this.app.use(require('./routes/generalRoutes'));            
    }
    star():void{
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchabdo en puerto: '+this.app.get('port'));
    }

  
}

const ser=new Server();
ser.star();