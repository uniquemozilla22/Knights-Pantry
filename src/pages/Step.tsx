import { useContext } from "react";
import { IStepContext, StepContext } from "../context/StepContext";

const Step = () => {
  const step = useContext<IStepContext>(StepContext);

  const activeStep = step.steps[step.active];

  return (
    <div className="relative h-[100vh]">
      <div>
        <h1>{activeStep.name}</h1>
        <p>{activeStep.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between">
        <button className={"btn btn-primary"} onClick={step.previousStep}>
          Prev
        </button>
        <h1>{step.active}</h1>

        <button className={"btn btn-primary"} onClick={step.nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step;
