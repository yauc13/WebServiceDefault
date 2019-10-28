import pool from '../../database';
import { Query } from '../../../query/query';
import { AuthData } from '../../../model/AuthData';


class LoginDao {

    public async getUserByIdentPass(idUser: number): Promise<any> {
        console.log('entra a listEnterpriseByIdUser logindao');
        try {
            const rsw = await pool.query(Query.enterpisesByUser,[idUser]);
            const rs = rsw.rows;

            var list = [];         
                list = rs.map((item: any) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }
        console.log(list);
        return list;
    } 

    public async listEnterpriseByIdUser(idUser: number): Promise<any> {
        console.log('entra a listEnterpriseByIdUser logindao');
        try {
            const rsw = await pool.query(Query.enterpisesByUser,[idUser]);
            const rs = rsw.rows;

            var list = [];         
                list = rs.map((item: any) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }
        console.log(list);
        return list;
    }

    public async listEnterpriseByIdUser2(idUser: number): Promise<any> {
        console.log('entra a listEnterpriseByIdUser logindao');
        try {
            const rsw = await pool.query(Query.enterpisesByUser,[idUser]);
            const rs = rsw.rows;

            var list = [];         
                list = rs.map((item: any) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }
        console.log(list);
        return list;
    }

    public async validateSectionByUser(data: AuthData, idUser: number): Promise<any> {
        console.log('entra a validateSectionByUser logindao');
        try {
            const rsw = await pool.query(Query.enterpisesByUser,[idUser]);
            const rs = rsw.rows;

            var list = [];         
                list = rs.map((item: any) => {
                    return {
                        idInst: item.id_inst,
                        nameInst: item.name_inst,
                        nitInst: item.nit_inst,
                        usernameInst: item.username_inst
                    };
                });               
        } catch (err) {           
            console.log(err);
            throw err;
        }
        console.log(list);
        return list;
    }

 

}
const loginDao = new LoginDao;
export default loginDao;
