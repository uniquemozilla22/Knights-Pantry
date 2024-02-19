import { useParams } from "react-router-dom";
import { getStep } from "../../api";
import { useEffect, useState } from "react";
import { IStepData } from "../../type";
import ErrorPage from "../ErrorPage";
import MiddleStep from "./middle";
import LeftStep from "./left";
import useStep from "../../hooks/useStep";

const Step = () => {
  const { id } = useParams();
  const { step, titles } = useStep(id);

  if (Object.keys(step).length === 0) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <ul className="steps steps-vertical lg:steps-horizontal sm:steps-vertical gap-5 flex-wrap">
        {titles.length === 0 ? (
          <> </>
        ) : (
          titles.map((title, index) => (
            <li
              key={index}
              className={`step ${
                title.id && title.id <= 1 ? "step-primary" : "step-ghost"
              } `}
            >
              <p className={"truncate"}>{title.title}</p>
            </li>
          ))
        )}
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
