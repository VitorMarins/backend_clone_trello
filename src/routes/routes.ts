import { Application } from "express";
import ColunaRoutes from "./coluna.routes";
import TarefaRoutes from "./tarefa.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/Coluna", ColunaRoutes);
    app.use("/Tarefa", TarefaRoutes);
  }
}
