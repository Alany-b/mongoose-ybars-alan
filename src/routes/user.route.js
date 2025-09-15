import {
createUser,
getUsers,
getUserById,
updateUser,
deleteUser,

} from "../controllers/user.controller.js";
import express from "express";

export const userRouter = express.Router();


userRouter.post("/users", createUser);
userRouter.get("/users", getUsers); 

userRouter.put("/users/:id", updateUser);
userRouter.get("/users/:id", getUserById);
userRouter.delete("/users/:id", deleteUser);
