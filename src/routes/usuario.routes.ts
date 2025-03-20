import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller';

class UsuarioRoutes {
    router = Router();
    controller = new UsuarioController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        // Retornar os usuários já cadastrados.
        this.router.get('/', this.controller.GetUsuarios);

        // Retorna um usuário específico pelo seu id.
        this.router.get('/:id', this.controller.GetUsuarioByID);

        // Atualizar um usuário pelo seu id.
        this.router.put('/:id', this.controller.UpdateUsuario);

        // Deletar um usuário pelo seu id.
        this.router.delete('/:id', this.controller.DeleteUsuario);
    }
}

export default new UsuarioRoutes().router;