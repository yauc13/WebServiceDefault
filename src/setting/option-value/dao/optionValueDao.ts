import pool from '../../database';
import { Query } from '../../../query/query';
import { SystemOptionValue } from '../../../model/SystemOptionValue';


class OptionValueDao {

 
    public async listOptionValue(idOpt:  number): Promise<any> {
        console.log('entra a listAllOption dao');
        try {
            const rsw = await pool.query(Query.LIST_ALL_OPTION_VALUE,[idOpt]);
            const rs = rsw.rows;

            var list = [];         
                list = rs.map((item: any) => {
                    return {
                        idOptVal: item.id_opt,
                        idOpt: item.id_opt,
                        nameOptVal: item.name_opt,
                        descOptVal: item.desc_opt,
                        codOptVal: item.cod_opt,
                        stateOptVal: item.state_opt_val
                    };
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }
        console.log(list);
        return list;
    }

    public async insert(oV: SystemOptionValue): Promise<any> {
        var res = false;
        try {
            await pool.query(Query.INSERT_OPTION_VALUE, 
                [oV.idOpt, oV.nameOptVal, oV.descOptVal, oV.stateOptVal, oV.codOptVal]);
            res = true;
        } catch (err) {
            res = false;
            console.log(err);
        }
        return res;
    }

    public async update(oV: SystemOptionValue): Promise<any> {
        var res = false;
        try {
            await pool.query(Query.UPDATE_OPTION_VALUE,
                 [oV.nameOptVal, oV.descOptVal, oV.stateOptVal, oV.codOptVal, oV.idOptVal]);
            res = true;
        } catch (err) {
            res = false;
            console.log(err);
        }
        return res;
    }

    public async delete(id: number): Promise<any> {
        var res = false;
        try {
            await pool.query(Query.DELETE_OPTION_VALUE, [id]);
            res = true;
        } catch (err) {
            res = false;
            console.log(err);
        }
        return res;
    }

}
const optionValueDao = new OptionValueDao;
export default optionValueDao;
