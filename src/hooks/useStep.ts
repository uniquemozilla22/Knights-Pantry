import { useContext } from "react";
import { StepContext } from "../context/StepContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useStep = () => {
  const { active, nextStep, previousStep, restartStep } =
    useContext(StepContext);
  const navigation = useNavigate();

  const nextStepRouter = () => {
    nextStep();
    navigation(`./step/${active}`);
  };

  let restartingStep = () => {
    toast.promise(new Promise(() => setTimeout(restartStep, 1000)), {
      loading: "Getting Steps",
      success: "Restarted",
      error: null,
    });
  };

  return {
    active,
    nextStep: nextStepRouter,
    previousStep,
    restartStep: restartingStep,
  };
};

export default useStep;
