import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

const useLoading = () => {
  const { loading, createLoading, removeLoading } = useContext(LoaderContext);

  const isUserLoginLoading = loading.includes("USER/LOGIN");
  const isStepsLoading = loading.includes("STEPS/FETCH");

  const withUserLoginLoading = async (callback: () => void) => {
    createLoading("USER/LOGIN");
    try {
      await callback();
    } catch (error) {
      console.log(error);
    }
    removeLoading("USER/LOGIN");
  };

  const withStepsFetchingLoading = async (callback: () => void) => {
    createLoading("STEPS/FETCH");
    try {
      await callback();
    } catch (error) {
      console.log(error);
    }
    removeLoading("STEPS/FETCH");
  };

  return {
    isUserLoginLoading,
    withUserLoginLoading,
    isStepsLoading,
    withStepsFetchingLoading,
  };
};

export default useLoading;
