import { useContext, useEffect, useState } from "react";
import { StepContext } from "../context/StepContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getStep, getStepTitle } from "../api";
import { IStepData, IStepTitle } from "../type";

const useStep = (id?: string) => {
  const { active, nextStep, previousStep, restartStep } =
    useContext(StepContext);
  const navigation = useNavigate();
  const [step, setStep] = useState<IStepData>({} as IStepData);
  const [titles, setTitles] = useState<IStepTitle[]>([] as IStepTitle[]);

  const nextStepRouter = () => {
    console.log(active);
    const id = titles[active].id;
    nextStep();
    navigation(`./step/${id}`);
  };

  const fetchStep = async (id: string) => {
    const data: { data: IStepData } = await getStep(id);
    console.log(data.data);
    setStep({ ...data.data });
  };

  const fetchStepTitle = async () => {
    const data: IStepTitle[] = await getStepTitle();
    setTitles(data);
  };

  useEffect(() => {
    fetchStepTitle();
    if (id) {
      fetchStep(id);
    }
  }, [id]);

  return {
    step,
    titles,
    active,
    nextStep: nextStepRouter,
    previousStep,
    restartStep,
  };
};

export default useStep;
