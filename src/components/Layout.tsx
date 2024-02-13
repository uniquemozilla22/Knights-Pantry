import { Fade } from "../UI/Animation";
import { Button } from "../UI/Button";
import { DoubleDownIcon } from "../assets/Icon";
import { IChildren } from "../type";
import { Navigation } from "./Navigation";

interface IProps {
  children: IChildren;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="h=screen w-screen">
      <Navigation />
      <div className="mx-10 p-5">{children}</div>
      <Fade className="fixed bottom-0 left-[50%] ">
        <Button title="See More" hover={false}>
          <div className="flex flex-col gap-1 items-center justify-center animation-ping">
            <DoubleDownIcon size={24} />
          </div>
        </Button>
      </Fade>
    </div>
  );
};
