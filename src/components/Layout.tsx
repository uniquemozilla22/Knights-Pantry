import { Toaster, toast } from "react-hot-toast";
import { Fade } from "../UI/Animation";
import { Button } from "../UI/Button";
import { DoubleDownIcon } from "../assets/Icon";
import useStep from "../hooks/useStep";
import { IChildren } from "../type";
import { Navigation } from "./Navigation";
import Sidebar from "./Sidebar";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { LoaderContextProvider } from "../context/LoaderContext";

interface IProps {
  children: IChildren;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const { nextStep } = useStep();
  const { message } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  if (pathname.split("/").includes("admin")) {
    return (
      <LoaderContextProvider>
        <AdminLayout>
          <Toaster />
          <Sidebar>{children}</Sidebar>
        </AdminLayout>
      </LoaderContextProvider>
    );
  }

  if (pathname.split("/").includes("login")) {
    return (
      <>
        <LoaderContextProvider>
          <Toaster />
          {children}
        </LoaderContextProvider>
      </>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Toaster />
      <Navigation />
      <div className="mx-10 h-full my-5">{children}</div>
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

const AdminLayout = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn()) {
    return (
      <Navigate to={"/?message=You must be logged in to access this page"} />
    );
  }

  return <>{children}</>;
};
