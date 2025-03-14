import express, { Application } from "express";
import cors from "cors";
import Routes from "./routes/routes";

const corsOptions = {
  origin: '*', // Coloque a URL do seu frontend aqui
  optionsSuccessStatus: 200
};

export default class App{
  public server: Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors(corsOptions));
  }

  private router(){
    new Routes(this.server);
  }
}