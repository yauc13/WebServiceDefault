import pool from '../../database';
import { Query } from '../../../query/query';


class OptionDao {

 
    public async listAllOption(): Promise<any> {
        console.log('entra a listAllOption dao');
        try {
            const rsw = await pool.query(Query.LIST_ALL_OPTION);
            const rs = rsw.rows;

            var list = [];         
                list = rs.map((item: any) => {
                    return {
                        idOpt: item.id_opt,
                        nameOpt: item.name_opt,
                        descOpt: item.desc_opt,
                        codOpt: item.cod_opt
                    };
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }
        console.log(list);
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
