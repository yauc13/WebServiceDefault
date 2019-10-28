import pool from '../../database';
import { Query } from '../../../query/query';
import { SystemOption } from '../../../model/SystemOption';


class OptionDao {

 
    public async listAllOption(): Promise<any> {
        try {
            const rsw = await pool.query(Query.LIST_ALL_OPTION);
            const rs = rsw.rows;
            var list = [];         
                list = rs.map((item: any) => {
                    const obj:SystemOption = new SystemOption();
                    obj.idOpt= item.id_opt
                    obj.nameOpt= item.name_opt
                    obj.descOpt= item.desc_opt
                    obj.codOpt= item.cod_opt
                    return obj;           
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }  
        return list;
    }


    public async delete(id: number): Promise<any> {
        var res = false;
        try {
            await pool.query(Query.DELETE_OPTION, [id]);
            res = true;
        } catch (err) {
            res = false;
            console.log(err);
        }
        return res;
    }

}
const optionDao = new OptionDao;
export default optionDao;
