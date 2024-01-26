import { useContext } from "react";
import { IStepContext, StepContext } from "../context/StepContext";
import { Fade } from "../UI/Animation";

const Step = () => {
  // const step = useContext<IStepContext>(StepContext);
  // const activeStep = step.steps[step.active];
  // return (
  //   <div className="relative h-[100vh]">
  //     <div>
  //       <Fade>
  //         <h1 className="text-[132px] font-black">{activeStep.title}</h1>
  //       </Fade>
  //       <div>
  //         <img src={activeStep.image} alt={activeStep.title} />
  //       </div>
  //     </div>
  //     <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
  //       <button className={"btn btn-primary"} onClick={step.previousStep}>
  //         Prev
  //       </button>
  //       <h1>{step.active}</h1>
  //       <button className={"btn btn-primary"} onClick={step.nextStep}>
  //         Next
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Step;
