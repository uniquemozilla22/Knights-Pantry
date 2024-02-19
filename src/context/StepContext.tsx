import { createContext, useCallback, useEffect, useState } from "react";
import { ISteps } from "../type";
import { getSteps } from "../api";
import toast from "react-hot-toast";

export interface IStepContext {
  active: number;
  steps?: ISteps;
  nextStep: () => void;
  previousStep: () => void;
  restartStep: () => void;
}

const defaultValue: IStepContext = {
  active: 0,
  nextStep: () => {},
  steps: [] as ISteps,
  previousStep: () => {},
  restartStep: () => {},
};

export const StepContext = createContext<IStepContext>(defaultValue);

const StepProviders = ({ children }: any) => {
  const [step, setStep] = useState<number>(1);
  const [stepData, setStepData] = useState<ISteps>([] as ISteps);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const restartStep = () => {
    setStep(1);
    toast.success("You can start from the begining");
  };

  const fetchSteps = useCallback(async () => {
    console.log("called fetchSteps");
    const data: ISteps = await getSteps();
    setStepData([...data]);
  }, []);

  useEffect(() => {
    fetchSteps();
  }, [fetchSteps]);

  return (
    <StepContext.Provider
      value={{
        ...defaultValue,
        steps: stepData,
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
