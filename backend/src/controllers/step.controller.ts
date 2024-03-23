import httpStatus from "http-status";
import { getSteps, saveStep } from "../services/steps.service";
import catchAsync from "../utils/catchAsync";
import { IUser } from "../models/user.model";
import { IStep } from "../models/step.model";

export const getPublicSteps = catchAsync(async (req, res) => {
  const steps = await getSteps();
  res.status(httpStatus.OK).send({ data: { steps }, message: "Success" });
});

export const createSteps = catchAsync(async (req, res) => {
  const { user, body }: { user: IUser; body: IStep } = req;
  if (!body.title || !body.image || body.description.length === 0) {
    res.status(httpStatus.NO_CONTENT).send({
      message: "There must be a title , description and image for a step",
    });
    return;
  }
  await saveStep(body);
  res.status(httpStatus.OK).send({ message: "Success" });
});
