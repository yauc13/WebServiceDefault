"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const query_1 = require("../query/query");
require('../config/config');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra a login server');
            const body = req.body;
            const passEncode = body.pass;
            //console.log(body);
            yield database_1.default.query(query_1.Query.LOGIN_USER_PASSWORD, [body.identUser, passEncode])
                .then((response) => {
                // console.log('response: ',response);
                const rs = response.rows;
                console.log(rs);
                if (rs <= 0) {
                    return res.status(400).json({
                        status: 'FAIL',
                        message: 'usuario o contraseña no encontrado',
                        data: null,
                        token: null,
                    });
                }
                else {
                    const user = {
                        idUser: rs[0].id_user,
                        idSpeciality: rs[0].id_speciality,
                        nameUser: rs[0].name_user,
                        lastNameUser: rs[0].last_name_user,
                        identUser: rs[0].ident_user
                    };
                    const token = jwt.sign({ data: user }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
                    return res.status(200).json({
                        status: 'SUCCESS',
                        message: 'login exitoso',
                        data: user,
                        token: token
                    });
                }
            })
                .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    status: 'FAIL',
                    message: 'error respuesta servidor',
                    data: null,
                    token: null,
                });
            })
                .finally(() => {
                console.log('cerrar poool');
                database_1.default.end();
            });
        });
    }
    connectionDb() {
        console.log('entra a conection base de datos');
        database_1.default.query(query_1.Query.SELECT_CONFIG_PARAM, [1])
            .then((response) => {
            console.log(response.rows);
            const list = response.rows;
            var arreglado = list.map((item) => {
                return { idConfigurationParam: item.id_configuration_param, idEnterprise: item.id_enterprise };
            });
            console.log(arreglado);
        })
            .catch((err) => {
            console.log(err);
        })
            .finally(() => {
            database_1.default.end();
        });
    }
}
const loginController = new LoginController;
exports.default = loginController;
