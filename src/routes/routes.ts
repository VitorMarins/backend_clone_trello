import { Application } from "express";
import ColunaRoutes from "./coluna.routes";
import TarefaRoutes from "./tarefa.routes";
import UsuarioRoutes from "./usuario.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/coluna", ColunaRoutes);
    app.use("/tarefa", TarefaRoutes);
    app.use("/usuario", UsuarioRoutes);
  }
};
