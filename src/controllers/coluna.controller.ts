import Coluna from "./../models/coluna.model";
import Tarefa from "./../models/tarefa.model";
import { Request, Response } from "express";

export default class ColunaController {
    async GetColunas(req: Request, res: Response) {
        try {
            const colunas = await Coluna.find().populate("tarefas");
            res.status(200).json(colunas);
        } catch (error) {
            console.error(error);
        }
    };

    async GetColunaByID(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const coluna = await Coluna.findById(id).populate("tarefas");
            res.status(200).json(coluna);
        } catch (error) {
            console.error(error);
        }
    };

    async CreateColuna(req: Request, res: Response): Promise<any> {
        try {
            const { titulo, tarefas } = req.body;
            // Verifique se todas as tarefas existem
            if (tarefas && tarefas.length > 0) {
                for (const tarefaId of tarefas) {
                    const tarefaExists = await Tarefa.findById(tarefaId);
                    if (!tarefaExists) {
                        return res.status(404).json({ message: `Tarefa with id ${tarefaId} not found` });
                    }
                }
            }
            const coluna = new Coluna({ titulo, tarefas });
            await coluna.save();
            res.status(201).json(coluna);
        } catch (error) {
            console.error(error);
        }
    };

    async UpdateColuna(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { titulo, tarefas } = req.body;
            // Verify if all tarefas exist
            if (tarefas && tarefas.length > 0) {
                for (const tarefaId of tarefas) {
                    const tarefaExists = await Tarefa.findById(tarefaId);
                    if (!tarefaExists) {
                        return res.status(404).json({ message: `Tarefa with id ${tarefaId} not found` });
                    }
                }
            }
            const coluna = await Coluna.findByIdAndUpdate(id, { titulo, tarefas }, { new: true }).populate("tarefas");
            res.status(200).json(coluna);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };

    async DeleteColuna(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            await Coluna.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            console.error(error);
        }
    };

    async AddTarefa(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { tarefaId } = req.body;
            const coluna = await Coluna.findById(id);
            if (!coluna) {
                return res.status(404).json({ message: `Coluna with id ${id} not found` });
            }
            const tarefa = await Tarefa.findById(tarefaId);
            if (!tarefa) {
                return res.status(404).json({ message: `Tarefa with id ${tarefaId} not found` });
            }
            coluna.tarefas.push(tarefaId);
            await coluna.save();
            res.status(200).json(coluna);
        } catch (error) {
            console.error(error);
        }
    };
}