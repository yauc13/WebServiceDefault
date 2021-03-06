import {Request, Response} from 'express';
import pool from '../../database';
import {Query} from '../../../query/query';
import loginDao from '../dao/loginDao'

require('../../configConstants');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class LoginController {

    public async login(req: Request, res: Response): Promise<any> {
        console.log('---entra a login server--');
        const body = req.body;
        const passEncode = body.pass;
        console.log(body);
        await pool.query(Query.LOGIN_USER_PASSWORD, [body.identUser, passEncode])
            .then(async (response: { rows: any; }) => {
                // console.log('response: ',response);
                const rs = response.rows;
                console.log(rs);
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'FAIL',
                        message: 'usuario o contraseña no encontrado',
                        data: null,
                        token: null,
                    });
                } else {
                   const lstInstitutions = await loginDao.listEnterpriseByIdUser(rs[0].id_user);
                    const user = {
                        idUser: rs[0].id_user,
                        idSpeciality: rs[0].id_speciality,
                        nameUser: rs[0].name_user,
                        lastNameUser: rs[0].last_name_user,
                        identUser: rs[0].ident_user,
                        lstInstitutions : lstInstitutions
                    };
                    const token = jwt.sign(
                        {data: user}, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN}
                    );
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'login exitoso',
                        data: user,
                        token: token
                    });
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
                console.log('cerrar poool')
                //pool.end()
            })
    }

    public async verifyTokenAndSection(req: Request, res: Response): Promise<any> {
     
    }


   


}

const loginController = new LoginController;
export default loginController;
