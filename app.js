import { connectDB } from "./src/config/database.js";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
