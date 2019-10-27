
import express, {Application, application} from 'express';

class Server{
 
    public app: Application;

    constructor(){
    this.app=express();
    this.config();
    this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000); 
        // necesario para recuperar body del Request      
        this.app.use(express.json()); //parse application/json
        this.app.use(express.urlencoded({extended: false})); //parse application/x-www-form-urlencoded
    }

    routes():void{         
        this.app.use(require('./generalRoutes'));
    }
    
    star():void{
        this.app.listen(this.app.get('port'));
        console.log('servido iniciado y escuchando en puerto: '+this.app.get('port'));
    }  
}

const ser = new Server();
ser.star();
