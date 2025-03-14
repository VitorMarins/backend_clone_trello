import App from "./app"
import dotenv from "dotenv";
dotenv.config();
const Port:number = Number(process.env.PORT || 3000);

new App().server
    .listen(Port, "localhost", () => {
        console.log(`O servidor esta rodando na Porta ${Port}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });