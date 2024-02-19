import { Toaster } from "react-hot-toast";
import { Fade } from "../UI/Animation";
import { Button } from "../UI/Button";
import { DoubleDownIcon } from "../assets/Icon";
import useStep from "../hooks/useStep";
import { IChildren } from "../type";
import { Navigation } from "./Navigation";

interface IProps {
  children: IChildren;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const { nextStep } = useStep();
  return (
    <div className="h=screen w-screen">
      <Toaster />
      <Navigation />
      <div className="mx-10 ">{children}</div>
      <Fade className="fixed bottom-0 left-[50%] ">
        <Button link title="See More" hover={false} onClick={nextStep}>
          <div className="flex flex-col gap-1 items-center justify-center animation-ping">
            <DoubleDownIcon size={24} />
          </div>
        </Button>
      </Fade>
    </div>
  );
};
