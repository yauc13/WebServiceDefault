import { Request, Response } from 'express';
import pool from '../../database';
import { Query } from '../../../query/query';
import optionValueDao from '../dao/optionValueDao'
import { SystemOptionValue } from '../../../model/SystemOptionValue';


class OptionValueController {


    public async listAllOption(req: Request, res: Response): Promise<any> {
        console.log('entra a listAllOption');
        try {
            const { id } = req.params;            
            const list = await optionValueDao.listOptionValue(+id);
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
        try {
        const opt:SystemOptionValue = req.body;
        const rs: boolean = await optionValueDao.insert(opt);            
                if (rs) {                
                     res.status(200).json({
                        status: 'SUCCESS',
                        message: 'insertado correctamente ',
                        data: true
                    });
                }
            } catch(err){
                console.log(err)
                 res.status(500).json({
                    status: 'FAIL',
                    message: err.toString(),
                    data: false
                });
            }           
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
            const r: boolean = await optionValueDao.delete(+id);
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
const optionValueController = new OptionValueController;
export default optionValueController;
