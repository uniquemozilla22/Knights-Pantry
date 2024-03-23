import Step, { IStep } from "../models/step.model";

export const getSteps = async () => {
  return await Step.find({}).sort({ createdAt: -1 });
};


export const saveStep = async (payload: IStep) => {
    const response = await Step.create([payload]);
    return response[0];
  };