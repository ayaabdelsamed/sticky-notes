import express from "express";
import { signup } from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", checkEmailExists, signup);

export default userRouter;