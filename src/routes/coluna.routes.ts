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
        this.router.post("/coluna", this.controller.CreateColuna);

        // Retornar as colunas já cadastradas.
        this.router.get("/colunas", this.controller.GetColunas);

        // Retorna uma coluna específica pelo seu id
        this.router.get("/coluna/:id", this.controller.GetColunaByID);

        // Atualizar uma coluna pelo seu id
        this.router.put("/coluna/:id", this.controller.UpdateColuna);

        // Deleta uma coluna pelo seu id
        this.router.delete("/coluna/:id", this.controller.DeleteColuna);
    }
}

export default new ColunaRoutes().router;
