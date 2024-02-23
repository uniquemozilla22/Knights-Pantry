import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import MiddleStep from "./middle";
import LeftStep from "./left";
import useStep from "../../hooks/useStep";

const Step = () => {
  const { id } = useParams();
  const { active, step, titles } = useStep(id);
  const navigate = useNavigate();

  if (Object.keys(step).length === 0) {
    return <ErrorPage />;
  }

  console.log(titles);

  return (
    <div className="flex flex-col items-center gap-10">
      <ul className="steps steps-vertical lg:steps-horizontal sm:steps-vertical gap-5 flex-wrap">
        {titles.length === 0 ? (
          <> </>
        ) : (
          titles.map((title, index) => (
            <li
              key={index}
              className={`step cursor-pointer ${
                index <= titles.indexOf(titles[active]) ? "step-primary" : ""
              } `}
              onClick={() => navigate(`/step/${title.id}`)}
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
