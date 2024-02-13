import { createContext, useState } from "react";
import { ISteps } from "../type";

const mockData: ISteps = [
  {
    id: 1,
    title: "Welcome to Knights Pantry",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Bridgeport_Purple_Knight_logo.svg/800px-Bridgeport_Purple_Knight_logo.svg.png",
    position: 1,
  },
  {
    id: 2,
    title: "Here you Shop",
    image: "",
    content: [
      {
        title: "Here you Shop",
        description:
          " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
      },
    ],
    position: 2,
  },
  {},
];

export interface IStepContext {
  active: number;
  steps: ISteps;
  nextStep: () => void;
  previousStep: () => void;
}

const defaultValue: IStepContext = {
  active: 0,
  nextStep: () => {},
  previousStep: () => {},
};

export const StepContext = createContext<IStepContext>(defaultValue);

const StepProviders = ({ children }: any) => {
  const [step, setStep] = useState<number>(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <StepContext.Provider
      value={{ ...defaultValue, active: step, nextStep, previousStep }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProviders;
