import { login, register, logout } from "../../controllers/auth.controller";
import auth from "../../middlewares/auth";
import validate from "../../middlewares/validate";
import express from "express";
import authValidation from "../../validations/auth.validation";

const authRoute = express.Router();

authRoute.post("/register", validate(authValidation.register), register);
authRoute.post("/login", validate(authValidation.login), login);
authRoute.post("/logout", auth("logout"), logout);

export default authRoute;
