import { Router } from 'express';
import TarefaController from '../controllers/tarefa.controller';

class TarefaRoutes {
    router = Router();
    controller = new TarefaController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        // Retornar as tarefas já cadastradas.
        this.router.get('/', this.controller.GetTarefas);

        // Retorna uma tarefa específica pelo seu id.
        this.router.get('/:id', this.controller.GetTarefaByID);

        // Criar uma nova tarefa.
        this.router.post('/', this.controller.CreateTarefa);

        // Atualizar uma tarefa pelo seu id.
        this.router.put('/:id', this.controller.UpdateTarefa);

        // Deletar uma tarefa pelo seu id.
        this.router.delete('/:id', this.controller.DeleteTarefa);
    }
}

export default new TarefaRoutes().router;