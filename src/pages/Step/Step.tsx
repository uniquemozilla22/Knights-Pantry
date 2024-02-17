import { useParams } from "react-router-dom";
import { fetchSteps } from "../../api";
import { useEffect, useState } from "react";
import { IStepData } from "../../type";
import ErrorPage from "../ErrorPage";
import MiddleStep from "./middle";
import LeftStep from "./left";

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

  return (
    <div className="flex flex-col items-center gap-5">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li
          className={`step ${
            id && parseInt(id) <= 1 ? "step-primary" : "step-ghost"
          } `}
        >
          Register
        </li>
        <li
          className={`step ${
            id && parseInt(id) <= 2 ? "step-primary" : "step-ghost"
          }`}
        >
          Choose plan
        </li>
        <li
          className={`step ${
            id && parseInt(id) <= 3 ? "step-primary" : "step-ghost"
          }`}
        >
          Purchase
        </li>
        <li
          className={`step ${
            id && parseInt(id) <= 4 ? "step-primary" : "step-ghost"
          }`}
        >
          Receive Product
        </li>
      </ul>

      {id && parseInt(id) % 2 === 0 ? (
        <MiddleStep step={step} />
      ) : (
        <LeftStep step={step} />
      )}
    </div>
  );
};

export default Step;
