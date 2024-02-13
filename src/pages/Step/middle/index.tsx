import { Button } from "../../../UI/Button";
import { IStepData } from "../../../type/index";
import foodDonation from "../../../assets/fooddonation.png";

interface IProps {
  step: IStepData;
}
const MiddleStep: React.FC<IProps> = ({ step }) => {
  return (
    <div className="grid modal-middle h-full">
      <h1 className="text-5xl text-center font-light">{step.title}</h1>
      {step.content.map((content) => (
        <div>
          <h2 className="text-2xl text-center font-light">{content.title}</h2>
          <p>{content.description.slice(0, 100)}</p>
          <Button title="Read More" hover={false}>
            Read more...
          </Button>
        </div>
      ))}
      <img className={"h-[60vh]"} src={foodDonation} alt={step.title} />
    </div>
  );
};

export default MiddleStep;
