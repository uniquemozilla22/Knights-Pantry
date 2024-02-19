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
    nextStep();
    navigation(`./step/${active}`);
  };

  const getTitles = async () => {
    const data = await getStepTitle();
    return data;
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
    if (id) {
      fetchStep(id);
      fetchStepTitle();
    }
  }, [id]);

  return {
    step,
    titles,
    active,
    nextStep: nextStepRouter,
    previousStep,
    restartStep,
    getTitles,
  };
};

export default useStep;
