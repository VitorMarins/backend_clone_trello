import { Tarefa } from "./../models/tarefa.model";
import { Request, Response } from "express";

export default class TarefaController {
    async GetTarefas(req: Request, res: Response) {
        try {
            const tarefas = await Tarefa.find();
            res.status(200).json(tarefas);
        } catch (error) {
            console.error(error);
        }
    };

    async GetTarefaByID(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tarefa = await Tarefa.findById(id);
            res.status(200).json(tarefa);
        } catch (error) {
            console.error(error);
        }
    };

    async CreateTarefa(req: Request, res: Response): Promise<any> {
        try {
            const { titulo } = req.body;
            const tarefa = new Tarefa({ titulo });
            await tarefa.save();
            res.status(201).json(tarefa);
        } catch (error) {
            console.error(error);
        }
    };

    async UpdateTarefa(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { titulo } = req.body;
            const tarefa = await Tarefa.findByIdAndUpdate(id, { titulo }, { new: true });
            res.status(200).json(tarefa);
        } catch (error) {
            console.error(error);
        }
    };

    async DeleteTarefa(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await Tarefa.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            console.error(error);
        }
    };
};