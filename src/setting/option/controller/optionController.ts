import { Request, Response } from 'express';
import pool from '../../database';
import { Query } from '../../../query/query';
import optionDao from '../dao/optionDao'


class OptionController {


    public async listAllOption(req: Request, res: Response): Promise<any> {
        console.log('entra a listAllOption');
        try {
            const list = await optionDao.listAllOption();
            res.status(200).json({
                status: 'success',
                message : 'lista ',
                data: list
            });
        } catch (error) {
            console.log('exception controller')
            console.log(error.toString())
            res.status(500).json({
                status: 'FAIL',
                message: error.toString(),
                data: null
            });
        }    
    }

    
    public async listAllOptionStatic(req: Request, res: Response): Promise<any> {
       
        try {
            const list = [
                {
                    "idOpt": 1,
                    "nameOpt": "Genero",
                    "descOpt": "sexo biologico",
                    "codOpt": "cod-sexo"
                },
                {
                    "idOpt": 6,
                    "nameOpt": "Zona",
                    "descOpt": "desc zona",
                    "codOpt": "ZONE"
                }
            ]
            res.status(200).json({
                status: 'success',
                message : 'lista ',
                data: list
            });
        } catch (error) {
            console.log('exception controller')
            console.log(error.toString())
            res.status(500).json({
                status: 'FAIL',
                message: error.toString(),
                data: null
            });
        }    
    }

    
    public async insert(req: Request, res: Response): Promise<any> {
        console.log('entra a insert', req.body);
        const opt = req.body;
        await pool.query(Query.INSERT_OPTION, [opt.nameOpt, opt.descOpt, opt.codOpt])
            .then((response: any) => {
                const rs = response;
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'insertado vacio',
                        data: true
                    });
                } else {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'insertado correctamente ',
                        data: true
                    });
                }
            })
            .catch((err: any) => {
                console.log(err)
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor no insertado',
                    data: false
                });

            })
            .finally(() => {
                console.log('cerrar poool')
                //pool.end()
            })
    }

    public async update(req: Request, res: Response): Promise<any> {
        console.log('entra a update', req.body);
        const opt = req.body;
        await pool.query(Query.UPDATE_OPTION, [opt.nameOpt, opt.descOpt, opt.codOpt, opt.idOpt])
            .then((response: any) => {
                const rs = response;
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'actualizado vacio',
                        data: true
                    });
                } else {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'actualizado correctamente ',
                        data: true
                    });
                }
            })
            .catch((err: any) => {
                console.log(err)
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor no actualizado',
                    data: false
                });

            })
            .finally(() => {
                console.log('cerrar poool')
                //pool.end()
            })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const r: boolean = await optionDao.delete(+id);
            if (r) {
                res.json({
                    status: 'SUCCESS',
                    message: 'eliminado correctamente',
                    data: true
                });
            } else {
                res.status(500).json({
                    status: 'FAIL',
                    message: 'error no eliminado',
                    data: false
                });
            }

        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: 'FAIL',
                message: 'error respuesta servidor no eliminado',
                data: false
            });
        }
    }




}
const optionController = new OptionController;
export default optionController;
