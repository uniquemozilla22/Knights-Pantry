import { useContext, useEffect, useState } from "react";
import { StepContext } from "../context/StepContext";
import { useNavigate } from "react-router-dom";
import { getStep, getStepTitle, getSteps } from "../api";
import { IStepData, IStepTitle } from "../type";
import useLoading from "./useLoading";

const useStep = (id?: string) => {
  const { active, nextStep, previousStep, restartStep } =
    useContext(StepContext);
  const { withStepsFetchingLoading } = useLoading();
  const navigation = useNavigate();
  const [step, setStep] = useState<IStepData>({} as IStepData);
  const [titles, setTitles] = useState<IStepTitle[]>([] as IStepTitle[]);
  const [steps, setSteps] = useState<IStepData[]>([] as IStepData[]);

  const nextStepRouter = () => {
    console.log(active);
    const id = titles[active].id;
    nextStep();
    navigation(`./step/${id}`);
  };

  const fetchSteps = async () => {
    withStepsFetchingLoading(async () => {
      const steps = await getSteps();
      setSteps([...steps.data]);
    });
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

  const restartSteps = () => {
    restartStep();
    setTimeout(() => navigation(`/step/${active}`), 1000);
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
    restartStep: restartSteps,
    fetchSteps,
    steps,
  };
};

export default useStep;
