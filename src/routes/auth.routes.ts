import { Router } from "express";
import AuthController from "../controllers/auth.controller";

class AuthRoutes {
    router = Router();
    controller = new AuthController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        // Criar uma nova coluna.
        this.router.post("/registrar", this.controller.Registrar);

        // Retornar as colunas já cadastradas.
        this.router.post("/login", this.controller.Login);
    }
}

export default new AuthRoutes().router;
