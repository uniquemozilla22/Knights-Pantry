import { Button } from "../../../UI/Button";
import { IStepData } from "../../../type/index";
import foodDonation from "../../../assets/fooddonation.png";
import { Fade, Slide } from "../../../UI/Animation";

interface IProps {
  step: IStepData;
}
const MiddleStep: React.FC<IProps> = ({ step }) => {
  return (
    <div className="grid modal-middle h-full">
      <Fade className="grid modal-middle h-full">
        <h1 className="text-4xl text-center font-light">{step.title}</h1>
        <div className="flex justify-center space-around gap-2 m-10 flex-wrap ">
          {step.content.map((content, index) => (
            <>
              <Fade delay={(index + 1) * 250} className="max-w-md">
                <Slide reverse delay={(index + 1) * 250}>
                  <h2 className="text-2xl font-light">{content.title}</h2>
                  <p className="flex-1 my-2 text-sm">
                    {content.description.slice(0, 100)}
                  </p>
                  <Button
                    title="Read More"
                    hover={false}
                    onClick={() =>
                      document.getElementById(`step_${index}`)?.showModal()
                    }
                  >
                    Read more...
                  </Button>
                </Slide>
              </Fade>
              <dialog id={`step_${index}`} className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-2xl">{content.title}</h3>
                  <p className="py-4 text-sm">{content.description}</p>
                </div>
              </dialog>
            </>
          ))}
        </div>
      </Fade>
      <Fade delay={500}>
        <img className={"h-[60%]"} src={foodDonation} alt={step.title} />
      </Fade>
    </div>
  );
};

export default MiddleStep;
