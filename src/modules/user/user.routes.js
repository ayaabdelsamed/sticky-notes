import express from "express";
import { signup } from "./user.controller.js";
import { checkEmailExists } from "../../middleware/checkEmial.js";
import { hashPssword } from "../../middleware/hashPassword.js";

const userRouter = express.Router();

userRouter.post("/signup", checkEmailExists,hashPssword, signup);

export default userRouter;