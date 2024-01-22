import { createContext, useState } from "react";
import data from "../Data.json";
interface ISteps {
  id: number;
  description: string | undefined;
  name: string;
  image: string;
}

export interface IStepContext {
  active: number;
  steps: ISteps[];
  nextStep?: () => void;
  previousStep?: () => void;
}

const defaultValue: IStepContext = {
  active: 0,
  steps: data,
};

export const StepContext = createContext<IStepContext>(defaultValue);

const StepProviders = ({ children }: any) => {
  const [step, setStep] = useState<number>(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => setStep(step - 1);

  return (
    <StepContext.Provider
      value={{ ...defaultValue, active: step, nextStep, previousStep }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProviders;
