import { Usuario, IUsuario } from "./../models/usuario.model";
import { Request, Response } from "express";
import { gerarToken } from '../config/jwt';
import { MongooseError } from 'mongoose';

export default class AuthController {
    async Registrar(req: Request, res: Response): Promise<any> {
        try {
            const { nome, email, senha } = req.body;
            const existeUsuario = await Usuario.findOne({ email });
            if (existeUsuario) {
                return res.status(400).json({ message: 'Email já está em uso' });
            }
            const usuario = new Usuario({ nome, email, senha });
            await usuario.save();
            res.status(201).json({ message: 'Usuário registrado com sucesso!'});
        } catch (error) {
            console.error(error);
            if ((error as MongooseError).name === 'MongoServerError' && 
                (error as any).code === 11000) {
                return res.status(400).json({ message: 'Email já registrado' });
            }
            res.status(500).json({ message: 'Erro no servidor ao registrar usuário'});
        }
    };

    async Login(req: Request, res: Response): Promise<any> {
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ email }) as IUsuario;
            if (!usuario || !(await usuario.compareSenha(senha))) {
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }
            const token = gerarToken({ id: (usuario._id as string).toString()});
            res.status(200).json({token});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro no servidor ao realizar login'});
        }
    };
};