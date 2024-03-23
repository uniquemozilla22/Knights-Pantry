import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

const useLoading = () => {
  const { loading, createLoading, removeLoading } = useContext(LoaderContext);

  const isUserLoginLoading = loading.includes("USER/LOGIN");

  const withUserLoginLoading = async (callback: () => void) => {
    createLoading("USER/LOGIN");
    try {
      await callback();
    } catch (error) {
      console.log(error);
    }
    removeLoading("USER/LOGIN");
  };

  return { isUserLoginLoading, withUserLoginLoading };
};

export default useLoading;
