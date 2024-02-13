import { useContext } from "react";
import { StepContext } from "../context/StepContext";
import { useNavigate, useNavigation } from "react-router-dom";

const useStep = () => {
  const { active, nextStep, previousStep } = useContext(StepContext);
  const navigation = useNavigate();

  const nextStepRouter = () => {
    nextStep();
    navigation(`./step/${active}`);
  };

  return { active ,nextStep: nextStepRouter, previousStep };
};

export default useStep;
