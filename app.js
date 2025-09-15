import { startDB } from "./src/config/database.js";
import express from "express";
import "dotenv/config";
import { userRouter } from "./src/routes/user.route.js";

const app = express();
const PORT = process.env.PORT

//rutas

app.use(express.json());
app.use("/api", userRouter);






app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
