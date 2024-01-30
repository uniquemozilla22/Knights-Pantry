import { useParams } from "react-router-dom";
import fetchSteps from "../../api";
import { useEffect, useState } from "react";
import { IStepData, ISteps } from "../../type";

const Step = () => {
  const { id } = useParams();

  const [step, setStep] = useState<IStepData | null>(null);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = async (id: string) => {
    const data: { data: IStepData } = await fetchSteps(id);
    setStep({ ...data.data });
  };

  console.log("id", id);
  return <>{<p>{step?.title}</p>}</>;
};

export default Step;
