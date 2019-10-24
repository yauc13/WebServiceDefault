import pool from '../config/database';
import { Query } from '../query/query';


class OptionDao {
    
    
    public async delete(id:number): Promise<any> { 
        var res=false;
        try{
        await pool.query(Query.DELETE_OPTION, [id]);
             res=true;
        }catch(err){
            res=false;
            console.log(err);                  
        }
        return res;
    }
    
}
const optionDao = new OptionDao;
export default optionDao;