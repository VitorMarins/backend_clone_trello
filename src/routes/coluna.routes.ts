import { Router } from "express";
import ColunaController from "../controllers/coluna.controller";
import authMiddleware from '../middleware/auth.middleware';

class ColunaRoutes {
    router = Router();
    controller = new ColunaController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        // Criar uma nova coluna.
        this.router.post("/", authMiddleware, this.controller.CreateColuna);

        // Retornar as colunas já cadastradas.
        this.router.get("/", authMiddleware, this.controller.GetColunas);

        // Retorna uma coluna específica pelo seu id
        this.router.get("/:id", authMiddleware, this.controller.GetColunaByID);

        // Atualizar uma coluna pelo seu id
        this.router.put("/:id", authMiddleware, this.controller.UpdateColuna);

        // Deleta uma coluna pelo seu id
        this.router.delete("/:id", authMiddleware, this.controller.DeleteColuna);
    }
}

export default new ColunaRoutes().router;
