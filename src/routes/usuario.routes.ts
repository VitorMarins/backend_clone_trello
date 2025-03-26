import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller';
import authMiddleware from '../middleware/auth.middleware';

class UsuarioRoutes {
    router = Router();
    controller = new UsuarioController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        // Retornar os usuários já cadastrados.
        this.router.get('/', authMiddleware, this.controller.GetUsuarios);

        // Retorna um usuário específico pelo seu id.
        this.router.get('/:id', authMiddleware, this.controller.GetUsuarioByID);

        // Atualizar um usuário pelo seu id.
        this.router.put('/:id', authMiddleware, this.controller.UpdateUsuario);

        // Deletar um usuário pelo seu id.
        this.router.delete('/:id', authMiddleware, this.controller.DeleteUsuario);
    }
}

export default new UsuarioRoutes().router;