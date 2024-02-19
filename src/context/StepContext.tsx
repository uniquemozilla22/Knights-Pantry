import { createContext, useCallback, useEffect, useState } from "react";
import { ISteps } from "../type";
import { getSteps } from "../api";
import toast from "react-hot-toast";

export interface IStepContext {
  active: number;
  nextStep: () => void;
  previousStep: () => void;
  restartStep: () => void;
}

const defaultValue: IStepContext = {
  active: 0,
  nextStep: () => {},
  previousStep: () => {},
  restartStep: () => {},
};

export const StepContext = createContext<IStepContext>(defaultValue);

const StepProviders = ({ children }: any) => {
  const [step, setStep] = useState<number>(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const restartStep = () => {
    setStep(0);
    toast.success("You can start from the begining");
  };

  return (
    <StepContext.Provider
      value={{
        ...defaultValue,
        active: step,
        nextStep,
        previousStep,
        restartStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProviders;
