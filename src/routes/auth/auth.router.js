import { Router } from "express";
import { loginController } from "./postController/login.controller.js";
export const auth = Router();

auth.route("/login", loginController);
auth.route("/register");
