import { useParams } from "react-router-dom";
import { fetchSteps } from "../../api";
import { useEffect, useState } from "react";
import { IStepData } from "../../type";
import ErrorPage from "../ErrorPage";

const Step = () => {
  const { id } = useParams();
  const [step, setStep] = useState<IStepData>({} as IStepData);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = async (id: string) => {
    const data: { data: IStepData } = await fetchSteps(id);
    console.log(data.data);
    setStep({ ...data.data });
  };

  if (Object.keys(step).length === 0) {
    return <ErrorPage />;
  }

  return <>{<p>{step.title}</p>}</>;
};

export default Step;
