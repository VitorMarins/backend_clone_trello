import { Router } from "express";
import ColunaController from "../controllers/coluna.controller";

class ColunaRoutes {
    router = Router();
    controller = new ColunaController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        // Criar uma nova coluna.
        this.router.post("/", this.controller.CreateColuna);

        // Retornar as colunas já cadastradas.
        this.router.get("/", this.controller.GetColunas);

        // Retorna uma coluna específica pelo seu id
        this.router.get("/:id", this.controller.GetColunaByID);

        // Atualizar uma coluna pelo seu id
        this.router.put("/:id", this.controller.UpdateColuna);

        // Deleta uma coluna pelo seu id
        this.router.delete("/:id", this.controller.DeleteColuna);
    }
}

export default new ColunaRoutes().router;
