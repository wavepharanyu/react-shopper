import express from "express";
import { login, signup } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signup)
userRouter.post("/login", login)

export default userRouter;