import { IChildren } from "../type";
import { Navigation } from "./Navigation";

interface IProps {
  children: IChildren;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
