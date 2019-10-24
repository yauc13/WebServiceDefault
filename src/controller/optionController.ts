import { Request, Response } from 'express';
import pool from '../config/database';
import { Query } from '../query/query';
import optionDao from '../dao/optionDao'


class OptionController {


    public async listAllOption(req: Request, res: Response): Promise<any> {
        console.log('entra a listAllOption');
        await pool.query(Query.LIST_ALL_OPTION)
            .then((response: { rows: any; }) => {
                const rs = response.rows;
                if (rs <= 0) {
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'LISTA VACIA',
                        data: rs
                    });
                } else {
                    var list = rs.map((item: any) => {
                        return {
                            idOpt: item.id_opt,
                            nameOpt: item.name_opt,
                            descOpt: item.desc_opt,
                            codOpt: item.cod_opt
                        };
                    });

                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'lista ',
                        data: list
                    });
                }
            })
            .catch((err: any) => {
                console.log(err)
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor',
                    data: null
                });

            })
            .finally(() => {
                console.log('cerrar poool')
                //pool.end()
            })
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