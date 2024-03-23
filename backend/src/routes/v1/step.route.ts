import express from "express";
import { createSteps, getPublicSteps } from "../../controllers/step.controller";
import validate from "../../middlewares/validate";
import * as StepValidation from "../../validations/step.validation";
import auth from "../../middlewares/auth";

const stepRouter = express.Router();

stepRouter.get("/", getPublicSteps);
stepRouter.post(
  "/create",
  [auth("steps"), validate(StepValidation.createSteps)],
  createSteps
);

export default stepRouter;
