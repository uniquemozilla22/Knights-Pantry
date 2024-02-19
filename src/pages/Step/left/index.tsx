import { Button } from "../../../UI/Button";
import { IStepData } from "../../../type/index";
import foodDonation from "../../../assets/fooddonation.png";
import { Fade, Slide } from "../../../UI/Animation";

interface IProps {
  step: IStepData;
}
const LeftStep: React.FC<IProps> = ({ step }) => {
  const showModal = (index: number) => {
    const element: any = document.getElementById(`step_left_${index}`);
    if (element && typeof element.showModal === "function") {
      element.showModal();
    }
  };
  return (
    <div className="grid justify-center h-full ">
      <Fade className="grid modal-middle h-full col-span-2">
        <h1 className="text-4xl text-center font-light">{step.title}</h1>
        <div className="grid grid-cols-2 grid-min justify-center items-center">
          <div>
            <div className="flex justify-center space-around gap-2 m-10 flex-wrap ">
              {step.content.map((content, index) => (
                <>
                  <Fade
                    delay={(index + 1) * 250}
                    className="max-w-md"
                    key={index}
                  >
                    <Slide delay={(index + 1) * 250}>
                      <h2 className="text-2xl font-light">{content.title}</h2>
                      <p className="flex-1 my-2 text-sm">
                        {content.description.slice(0, 100) + "..."}
                      </p>
                      <Button
                        title="Read More"
                        hover={false}
                        onClick={() => showModal(index)}
                      >
                        Read more...
                      </Button>
                    </Slide>
                  </Fade>
                  <dialog id={`step_left_${index}`} className="modal">
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
          </div>
          <Fade delay={500}>
            <img className={"h-[80%]"} src={foodDonation} alt={step.title} />
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default LeftStep;
